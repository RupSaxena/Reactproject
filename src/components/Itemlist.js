 import { additem } from "../utils/Cartslice";
import { CDN_Link } from "../utils/constants";
import { useDispatch } from 'react-redux'
 

 const Itemlist=({item
})=>{
    console.log({item});
    const dispatch=useDispatch();

    const clickitems=(item)=>{
dispatch(additem(item))
};
return (
<div>{
item.map((i)=>(
    
<div key={i?.card?.info?.id} className="p-4 border-b-2 border-gray-100 text-left">
<img src={CDN_Link+ i?.card?.info?.imageId} className="w-14"/>
<div className="py-2">
<span className="font-bold">{i?.card?.info?.name}-</span>
<span className="font-bold">{i.card.info.price? i.card.info.price/100: i.card.info.defaultPrice}</span>
</div>

<p>{i.card.info.description}</p>
<div className="w-3/12 p-4">
    <div className="absolute">
        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"onClick={()=>clickitems(i)} >Add+</button>
    </div>
    
</div>
</div>))}
</div>
)
}

export default Itemlist;