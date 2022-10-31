import {useSelector} from 'react-redux'

const Home =()=>{
 const {user} =useSelector(state =>state); 

 console.log("user data is ",user);

 return (<>
     This is home page 
    
    </>)
}


export default Home;