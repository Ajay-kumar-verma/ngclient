import axios from 'axios';

const {createAsyncThunk, createSlice} = require('@reduxjs/toolkit');

const initialState = {
   loading:false,   
   login:false,
   message:"",
   userData:{},

  }
  const END_POINT = `https://ngserver.herokuapp.com/login/`;

  
  const login = createAsyncThunk(
    'login',
    async (obj) => {
      // console.log('login data is ',obj)
      const data = await   axios.post(`${END_POINT}`,obj)
      console.log("Server data is  ",data.data);     
       return data.data;
   
    }
  )


const {reducer } = createSlice({
  name:"login",
  initialState,
  extraReducers: (builder) => {
 
  builder.addCase(login.pending, state => {
      state.loading = true;
      state.login=false;
   })
 
   builder.addCase(login.fulfilled, (state,action) => {
     state.loading = false ;
     state.login = action.payload.login;
     state.message=action.payload.message;
     state.userData= action.payload.user;
      
   })

   builder.addCase(login.rejected,(state,action) => {
     state.loading = false;
      state.login = action.payload.login;
    
    })  


  }
  
})



 
export const loginReducer =  reducer ;
export const loginActions = login;