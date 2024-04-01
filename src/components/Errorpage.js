import { useRouteError } from "react-router-dom"
const Errorpage=()=>{
    const err=useRouteError();
    console.log(err);
    return ( <div>
        <h1>Error--------------</h1>
        <p>page not founf{err.status}</p>
    </div>)
}
export default Errorpage