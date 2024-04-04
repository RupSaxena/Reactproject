import { useEffect, useState } from "react"
import Shimmer from"./Shimmer";
import { useParams } from "react-router-dom";
import useMenu from "../utils/useMenu";
import Categories from "./Categories";
const Menu=()=>{
const [showindex, setshowindex]=useState();
const {restId}=useParams();
const resinfo=useMenu(restId) ; 
if(resinfo === null) return <Shimmer/>;
const{ name, cuisines, costForTwoMessage } = resinfo?.cards[2]?.card?.card?.info;
const{ itemCards, title } = resinfo?.cards[4].groupedCard.cardGroupMap?.REGULAR.cards[3].card.card;
const categories=resinfo?.cards[4].groupedCard.cardGroupMap?.REGULAR.cards.filter (c=>c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
console.log(categories);
return (
<div className="menu text-center">
<h1 className="font-bold mt-3 mb-5 text-lg"> {name}</h1>
<h2 className="font-bold">{cuisines}</h2>
<h2>{costForTwoMessage}</h2>
{
categories.map((category, index) =><Categories key={category.card?.card.title}data={category.card?.card}
setshowindex={()=>
{
if (showindex===index){setshowindex(-1)} else setshowindex (index)}}
showitems={index===showindex?true:false}/>)
}
</div>
);
};
export default Menu;