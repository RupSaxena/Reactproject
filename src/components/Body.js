import Rescard from "./Rescard";
import {useState,useEffect,useContext}from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus"; 
import { updatedcard } from "./Rescard";
import Usercontext from "../utils/usercontext";
const Body=()=>{
const[resdatas, setresdata] = useState([]);
const [filteredrestaurant,setfilteredres]=useState([]);
const [searchtext,setsearchtext]=useState("");
const onlinestatus=useOnlinestatus();
const promotedcard=updatedcard(Rescard);

useEffect(()=>{
fetchdata();
},[]);

const fetchdata=async()=>{
    const data= await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.98340&lng=77.70600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
    const jsondata=await data.json () ;
    setresdata (jsondata?.data?.cards[1]?.card?.card?.gridElements?.infowithStyle?.restaurants); 
    setfilteredres (jsondata?.data?.cards[1]?.card?.card?.gridElements?.infowithStyle?.restaurants);
}
    if (onlinestatus===false) return <h1>You are offline</h1> 
    const {loggedUser, setinfo}=useContext(Usercontext) ;
    return(
    <div className="body">
    <div className="'flex py-4"
    >
    <div className="search">
    <input type="text" className="border border-solid border-black mx-3 mb-3" value={searchtext} onChange={(e)=>{setsearchtext(e.target.value)}}></input>
    <button className="py-2 px-3 bg-green-200 rounded-lg" onClick={()=>{
    const searcdata=resdatas.filter((res)=>
    res.info.name.toLowerCase().includes(searchtext. toLowerCase())
    );
    setfilteredres (searcdata);
    }}>Search</button>
    </div>
    <button className="mx-7 px-2 bg-green-200"onClick={()=>{    ``
const filterdata=resdatas.filter((res) => res.info.avgRating >=4.2
)
console.log(filterdata); setfilteredres (filterdata);
}}>Top Rated restaurants</button>
<input className="border border-black"type="text" value={loggedUser} onChange={(e)=>setinfo(e.target.value)}/> </div>
<div className="res-container flex justify-between flex-wrap">
{
filteredrestaurant?.map((restaurant)=> (<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> {restaurant.info.promoted?<promotedcard resname={restaurant}/>:
<Rescard resname={restaurant}/>}</Link>))
}
</div> 
</div>

)
}
export default Body;