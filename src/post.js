import React ,{Component} from "react";
import App from "./App" ;
import axios from "axios";

import { BrowserRouter, Route, Link, NavLink,Switch, Redirect } from "react-router-dom";
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default class Post extends Component
{

constructor()
{
super();
this.state={
  id:"",
  post:[],
  userId:"",
  title:'',
  body:""

}

}

componentDidMount(){
  this.getPost();
}

createPost=async ()=>{
  const {data}=await axios.post(API_URL,{userId: this.state.userId,title: this.state.title,body: this.state.body})
 const post=[...this.state.post];
  post.push(data);
  this.setState({post,userId:"",title:"",body:""});
}



getPost=async ()=>{
  const {data}=await axios.get(API_URL);
this.setState({post:data})

}

deletePost=async (postId)=>{
axios.delete(`${API_URL}/${postId}`);
let post=[...this.state.post];
post=post.filter(post=>post.id!==postId);
this.setState({post});
}
handleSubmit=(evt)=>{
  evt.preventDefault();
  if(this.id){
    this.selectPost();
  }
  else{
    this.createPost();
  }
}


selectpost=post=>{

  this.setState(
    // {id:post.id,
    // userId:post.userId,
    // title:post.title,
    // body:post.body} or
    
    {...post                                                                                                                                                                                                                                          }
    );
  
  }

handlechange=({target:{name,value}})=>{
  this.setState({[name]:value})
}

render()
{

return(

<div>

<p>hii this is abhi</p>

<form onSubmit={this.handleSubmit}>
<label>userId</label>
<input type="text" value={this.state.id} name="userId"  value={this.state.userId} onChange={this.handlechange}/>
<br></br><br/>
<label>Title</label>
<input type="text" value={this.state.id} name="title" value={this.state.title} onChange={this.handlechange}/>
<br></br><br/>
<label>body</label>
<input type="text" value={this.state.id} name="body" value={this.state.body} onChange={this.handlechange}/>
<br/><br/>
<input type="submit" />

</form>




<table class="table table-striped table-dark">


  <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
      <th></th>  <th>operations</th>  <th></th>
    </tr>
  </thead>

<tbody>



{this.state.post.map(readdata=>{
return(
  
 <tr  key={readdata.id}>

  <th scope="row">{readdata.userId}</th>
  
 
<td>{readdata.id}</td>
<td>{readdata.title}</td>
<td>{readdata.body}</td>


 
  <td>
  <button onClick={()=>{this.selectpost(readdata)}}>update</button></td>
 <td> <button onClick={()=>{this.deletePost(readdata.id)}}>delete</button></td>
  <td><NavLink class="nav-link" to={`post/${readdata.id}`}>views</NavLink>
  {/* <link to></link><button></button> */}
  </td>
  
</tr>
)
  
})}



</tbody>

  
   

</table>

</div>



)




}




}