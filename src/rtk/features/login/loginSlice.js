import axios from 'axios';

const {createAsyncThunk, createSlice} = require('@reduxjs/toolkit');

const initialState = {
   loading:false,   
   login:false,
   message:"",
   token:"",

  }
  const END_POINT = `https://ngserver.herokuapp.com/login/`;

  
  const login = createAsyncThunk(
    'login',
    async (obj) => {
      // console.log('login data is ',obj)
      const data = await   axios.post(`${END_POINT}`,obj)
      // console.log("Server data is  ",data);     
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
     state.token = action.payload.token;
     state.login = action.payload.login;
      if(action.payload.login && action.payload.token){
        localStorage.setItem("token",action.payload.token);
        localStorage.setItem("login",action.payload.login);

      }
      
   })

   builder.addCase(login.rejected,(state,action) => {
     state.loading = false;
     state.token = action.payload.token;
     state.login = action.payload.login;
    
    })  


  }
  
})



 
export const loginReducer =  reducer ;
export const loginActions = login;