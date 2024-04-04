import { useRouteError } from "react-router-dom"
const Errorpage=()=>{
    const err=useRouteError();
    console.log(err);
    return ( <div>
        <h1>Error--------------</h1>
        <p>Ops.....page not found{err.status}</p>
    </div>)
}
export default Errorpage