import "./Navbar.css";
import logo from "./../Assets/logo.png";
import cartLogo from "./../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext";

const Navbar = () => {
  // let count = 0;
  let [menu,setMenu] = useState("Shop All");
  console.log("value of menu is", menu);
  const {getTotalCartItems}=useContext(ShopContext);
  const navigate = useNavigate();

  const handleClickButton = () =>{
    navigate('/signin');
  }

  const handleClickCart = () =>{
    navigate('/cart');
  }
  return (
    <>
      <nav className="navbar">
        
          {/* {to use imported logo } */}
          <img className="nav-logo" src={logo} alt="Logo" />
          <h1 className="nav-logo">SmartCart</h1>
          <div className="links">
            <Link className="nav-link" onClick={()=> setMenu("Shop All")} to = "/">Shop {menu === "Shop All"? <hr/> : <></>}</Link>
            <Link className="nav-link" onClick={()=> setMenu("Shop Men")} to = "/men"> Men {menu === "Shop Men"? <hr/> : <></>}</Link>
            <Link className="nav-link" onClick={()=> setMenu("Shop Women")} to = "/women"> Women {menu === "Shop Women"? <hr/> : <></>}</Link>
            <Link className="nav-link" onClick={()=> setMenu("Shop Kids")}to = "/kids" > Kids {menu === "Shop Kids"? <hr/> : <></>}</Link>
            <Link className="nav-link" onClick={()=> setMenu("Contact Us")} to = "/contact"> Us {menu === "Contact Us"? <hr/> : <></>}</Link>
          </div>
          <div className="nav-login-cart">
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Log Out</button>:   <button onClick={handleClickButton} >Login In</button>}
       
          <img id = "cart_logo" src={cartLogo} alt="cart_logo"  onClick={handleClickCart}/>
          <div className="count">{getTotalCartItems()}</div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;