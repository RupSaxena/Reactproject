import { LOGO } from "../utils/constants";
import {useState, useContext } from "react" ;
import useOnlinestatus from "../utils/useOnlinestatus";
 import { Link } from "react-router-dom";
 
import Usercontext from "../utils/usercontext";
import { useSelector } from "react-redux";

const Head= ()=>{
const [btnName , setbtnName]=useState ("login");
const onlinestatus=useOnlinestatus () ;
 const {loggedUser }=useContext (Usercontext) ;
 const cartitems=useSelector((store)=>store.cart.items)
 
 
return (
<div className="flex items-center justify-between bg-gray-300 shadow-lg">
<div className="logo">
<img src={LOGO} alt="image" width="120px" height="90px"/>
 </div> 
<div className="flex"> 
<ul className="flex">
<li className= "px-4 font-bold">{onlinestatus?"online" : "Offline"} </li>
<li className= "px-4"><Link to="/">Home</Link></li> 
<li className="px-4"><Link to="/contact">Contact</Link></li>
 <li className="px-4"><Link to="/cart">Cart-{cartitems.length}items</Link></li>
  <li className="px-4"><Link to="/about">About us</Link></li>
  <button onClick={()=>{
    btnName==="login"?
    setbtnName("logout"):setbtnName("login");
  }}>{btnName}</button>
  <li className="font-bold px-3 font-serif">{loggedUser}</li>
  </ul>
  </div>
  </div>
  )}
  export default Head;