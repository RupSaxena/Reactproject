import React from 'react';
class Userclass extends React. Component{
constructor (props) {
super (props);
this.state={
userinfo:""
//count: 0, count2:1
}
}
async componentDidMount ( ){
const data=await fetch ("https://api.github.com/users/akshaymarch7");
const jsondata=await data. json (); this.setState({userinfo:jsondata})
console.log (jsondata);
}
componentDidUpdate(){
console. log("did update");
}
componentWillUnmount ( ){
console.log("will unmount");
}
render (){
    //const{name, location}=this. props;
    return (
<div className="user-card"> <h2><img src={this.state.userinfo.avatar_url}/></h2>
<h2>Name: {this.state.userinfo.name}</h2> 
<h3>Location:{this.state.userinfo.location}</h3> 
<h4>id:{this.state.userinfo.id}</h4>
</div>
)}}
export default Userclass;