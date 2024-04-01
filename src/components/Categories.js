import Itemlist from "./Itemlist";
import { useState } from "react";
const Categories= ({data , setshowindex, showitems})=>{
// const [showitems, setshowitems]=usestate (false);

const handleclick=()=>{setshowindex ()
}
return (
<div>
<div className="W-6/12 m-auto bg-gray-200 shadow-lg mt-4 p-3 cursor-pointer">
<div className="flex justify-between" onClick={handleclick}><span className="font-bold text-lg"> {data.title} ({data.itemCards.length})</span> <span>↓</ span> </div>
{showitems && <Itemlist item={data.itemCards }/>} </div>
</div>
)}
export default Categories;