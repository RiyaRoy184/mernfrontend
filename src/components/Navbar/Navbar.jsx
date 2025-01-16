import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {
    
    const [menu,setMenu] = useState("home");

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate();
   
   const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
   }
  return( 
       <div className="navbar">
       <Link to='/'> <div className="logo"> Grab & Go </div></Link>
         <ul className='navbar-menu'>
          <Link to='/' onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>home</Link> 
          <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
          <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
         </ul>
         <div className="navbar-right">
         <i className="fa-solid fa-magnifying-glass fa-xl"></i>
         <div className="navbar-search-icon">
         <Link to='/cart'><i className="fa-solid fa-basket-shopping fa-xl"></i></Link>
         <div className={getTotalCartAmount()===0?"":"dot"}></div>
         </div>
         {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
          :<div className='navbar-profile'>
            <i className="fa-solid fa-user fa-xl"></i>
             <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myOrders')}> <img src={assets.bag} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><i className="fa-solid fa-right-from-bracket fa-xl"></i><p>Logout</p></li>
             </ul>
            </div>}
         </div>
       </div>
  )
}

export default Navbar