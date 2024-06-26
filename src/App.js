import React, {useEffect, useState} from "react";
import Body from "./components/Body"; 
import Footer from "./components/Footer" 
import {createBrowserRouter } from 'react-router-dom'; 
import { RouterProvider, Outlet } from "react-router-dom";
import Errorpage from "./components/Errorpage"; 
import About from "./components/About"; 
import ReactDOM from "react-dom/client";
import Head from "./components/Head";
import Shimmer from "./components/Shimmer";
import Usercontext from "./utils/usercontext";
import '/index.css';
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import { Provider } from "react-redux";
import { lazy, Suspense} from "react";
import appstore from "./utils/appstore";
import Cart from "./components/Cart";
const Contact = lazy(()=>import("./components/Contact"));



const Appbody=()=>{
const [info, setinfo]=useState();
useEffect(()=>{const data={name: "Rupal Saxena"};   
setinfo(data.name)}, [])
return (
    <Provider store={appstore}>
    <Usercontext.Provider value={{loggedUser:info, setinfo}}>
        <div className="appbody">
<Head/>
{/*<Usercontext. Provider value={{loggedUser: "Mansi"}}>*/}
<Outlet/>
 {/*</Usercontext.Provider>*/}
 <Footer/>
 </div>
 </Usercontext.Provider>
</Provider>
)
 }
const approuter=createBrowserRouter([
{
    path:"/",
element: <Appbody/>,
 errorElement: <Errorpage/>,
children: [
{path:"/",
element: <Body/>},
{
path:"/about",
element: <About/> },
{
 path:"/contact",
element: <Suspense fallback={<Shimmer/>}><Contact/></Suspense>
 },{
 path:"/restaurants/:restId",
element: <Menu/>
},{
    path:"/cart",
    element:<Cart/>
}]
},
])

const root =ReactDOM.createRoot(document.getElementById("root"));

//root.render(<Jsxhead/>);

 root.render(<RouterProvider router={approuter}/>
//root.render(jsxhead);

)

 //root.render(jsxhead);