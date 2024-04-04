import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearcart } from "../utils/Cartslice";
const Cart=()=>{
    const dispatch=useDispatch();
   
    const clearitems=()=>{
        dispatch(clearcart());
    }
    const cartitems=useSelector((store)=>store.cart.items);
    return (
        <div>
          
<Itemlist item={cartitems}/>
<div >
        <button className="p-2 mx-100 rounded-lg bg-black text-white shadow-lg " onClick={clearitems} >Clear cart</button>
    </div>
</div>
    );
}
export default Cart;