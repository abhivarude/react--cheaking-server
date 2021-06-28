import React ,{Component} from "react";

import axios from "axios";
let users_url="https://jsonplaceholder.typicode.com/users";

export default class Posts extends Component{


constructor(){
    super();
    this.state={
    users_post:[]
    }
}


componentDidMount(){
    this.createpost();
  }

createpost=async ()=>{
const {data}=await axios.get(users_url);
this.setState({users_post:data})
{console.log(data)}
}



render(){

    
return(
    <div>
    
    <td>name</td>
    <td>email</td>
    <td>phone</td>
    
    
    {this.state.users_post.map(values=>{
    
        return(
            <div>
    <td>{values.name}</td>
    
            </div>
        )
    })}
    
    
    
    </div>
    );
}








}