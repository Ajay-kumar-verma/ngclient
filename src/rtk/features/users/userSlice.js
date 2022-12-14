import axios from 'axios';
import  {createAsyncThunk, createSlice} from  '@reduxjs/toolkit';
const initialState = {
  userData:{},
  loading:false,
  message:""
  }

const END_POINT = `https://ngserver.herokuapp.com`;

const signup = createAsyncThunk(
  'signup',
  async (obj) => {
    console.log("submit data is ",obj)
  const data = await   axios.post(`${END_POINT}/user`,obj)
   console.log("Server data is  ",data);     
    return data.data;
  
  }
)




const {reducer } = createSlice({
  name:"signup",
  initialState,
  extraReducers: (builder) => {
 
    builder.addCase(signup.pending, state => {
        state.loading = true;
        })
   
     builder.addCase(signup.fulfilled, (state,action) => {
       state.loading = false ;
    //  console.log("data is ",action.payload)
        state.message= action.payload.msg;
     })
  
     builder.addCase(signup.rejected,(state,action) => {
       state.loading = false;
       state.message = action.payload.msg;
      // console.log("data is ",action.payload)
     })  
    }
 })  





 
 
 
export const userReducer =  reducer ;
export const userActions = signup;
