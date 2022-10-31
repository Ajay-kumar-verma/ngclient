import {useSelector} from 'react-redux'
import {Routes,Route} from 'react-router-dom';
import Navbar from './container/Navbar'
import Pages from './pages/Pages'
import Home from './pages/Home'

function App() {

  const {login,user} =useSelector(state => state );

  console.log("Cureent redux state is ",login,user);
  
  // if(false){
  //     return   <Home />
  // }

const Com =()=>{
  return <>HI</>
}

return (<>
<Com />
<Routes>
<Route path="/" component={<Com />} />

</Routes>



</>)


}

export default App;
