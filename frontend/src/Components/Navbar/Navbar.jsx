import "./Navbar.css";
import logo from "./../Assets/logo.png";
import cartLogo from "./../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let count = 0;
  let [menu,setMenu] = useState("Shop All");
  console.log("value of menu is", menu);
  const navigate = useNavigate();

  const handleClickButton = () =>{
    navigate('/signin');
  }

  const handleClickCart = () =>{
    navigate('/cart');
  }
  return (
    <>
      <nav>
        
          {/* {to use imported logo } */}
          <img src={logo} alt="Logo" />
          <h1>SmartCart</h1>
          <div className="links">
            <Link className="nav-link" onClick={()=> setMenu("Shop All")} to = "/">Shop All {menu === "Shop All"? <hr/> : <></>}</Link>
            <Link className="nav-link" onClick={()=> setMenu("Shop Men")} to = "/men">Shop Men {menu === "Shop Men"? <hr/> : <></>}</Link>
            <Link className="nav-link" onClick={()=> setMenu("Shop Women")} to = "/women">Shop Women {menu === "Shop Women"? <hr/> : <></>}</Link>
            <Link className="nav-link" onClick={()=> setMenu("Shop Kids")}to = "/kids" >Shop Kids {menu === "Shop Kids"? <hr/> : <></>}</Link>
            <Link className="nav-link" onClick={()=> setMenu("Contact Us")} to = "/contact">Contact Us {menu === "Contact Us"? <hr/> : <></>}</Link>
          </div>
          <button onClick={handleClickButton} >Sign In</button>
          <img id = "cart_logo" src={cartLogo} alt="cart_logo"  onClick={handleClickCart}/>
          <div className="count">{count}</div>
        
      </nav>
    </>
  );
};

export default Navbar;