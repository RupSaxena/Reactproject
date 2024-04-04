import { Component} from "react" 
//import Userclass from "./Userclass"
//import Usercontext from "../utils/usercontext";
class About extends Component{ 
    constructor (props) {
super(props);
    }
    componentDidMount(){
}
render(){
return (
<div>
<h1>About page</h1>
<p>It is react practice course</p>
{/* <Usercontext.Consumer>{({loggedUser})=><h1>My name is {loggedUser}</h1>}</Usercontext.Consumer>
<Userclass name ={"rupal"} location = {"delhi"} /> */}
</div>
)
}
}
export default About;