import { useEffect, useState } from "react";
const useMenu=(restId)=>{
const [resinfo, setrestinfo]=useState (null);
useEffect(()=>{
fetchmenu();
},[])
const fetchmenu=async()=>{
const data1=await fetch("https: //www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + restId);
const jsondata=await data1.json() ;
setrestinfo (jsondata.data) ;
}
return resinfo;
}
export default useMenu;