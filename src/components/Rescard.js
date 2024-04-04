import {CDN_Link} from "../utils/constants";
import { useContext } from "react";
import Usercontext from "../utils/usercontext";
const Stylecard={
backgroundColor: "#d3d3d3"
}
const Rescard=(props)=>{
const data=useContext(Usercontext) ;
const {resname}=props;
return (
<div className="m-4 p-4 w-[250px] rounded-lg" style={Stylecard}>
<img className="rounded-lg"src={CDN_Link+resname.info.cloudinaryImageId} alt="image"width="100%" height="100%"/> 
<h1 className="font-bold py-4 text-lg">{resname.info.name}</h1> 
<h3>{resname.info.cuisines.join(" , ")}</h3>
 <h3> {resname.info.avgRating}</h3> 
 <h3> {resname.info.sla.deliveryTime}</h3>
 
</div>
)}
 export const updatedcard=(Rescard)=>
 { 
     return (props)=>{
 return (
 <div>
 <label>Promoted</label>
 <Rescard {...props}/> 
 </div>
 )
 }
}
export default Rescard;