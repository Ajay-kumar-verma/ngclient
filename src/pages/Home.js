import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {getData } from '../rtk/actions/index';


const Home =()=>{
 const {user} =useSelector(state =>state); 

 const dispatch =useDispatch(); 

 console.log("user data is ",user);
useEffect(()=>{
    dispatch(getData(localStorage.getItem('token')));
},[])

 return (<>
     This is home page 
    
    </>)
}


export default Home;