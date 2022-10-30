import {useSelector} from 'react-redux'
import Navbar from './container/Navbar'
import Pages from './pages/Pages'
import Home from './pages/Home'
function App() {

  const state =useSelector(state => state.login );

  console.log("Cureent redux state is ",state);
  
  if(state.login){
      return   <Home />
  }

  

  return (
    <>
    <Navbar />
    <Pages /> 
    </>
  );
}

export default App;
