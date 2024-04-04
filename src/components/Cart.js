import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";

const Cart=()=>{
    const dispatch=useDispatch();
    const clearitems=()=>{
        dispatch(clearcart());
    }
    const cartitems=useSelector((store)=>store.cart.items);
    return (
        <div>
            <div className="absolute">
        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={clearitems} >Clear cart</button>
    </div>
<Itemlist item={cartitems}/>
</div>
    );
}
export default Cart;