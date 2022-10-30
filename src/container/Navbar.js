import './style.css';

const menu =(list) =>{

return (<>
    <ul>
     {list.map(e=> <li><a href={"#"+e}>{e}</a></li>)}
    </ul>
</>)

}



const Navbar =_=>{

return (<>
 <div className="navbar" >
  <div className="logo" >LOGO</div>
  <div className="menu"> 
    <div className="menulist">{menu(["login","signup","home","contact"])}</div>
   </div>
 </div>

</>)


}



export default  Navbar;
