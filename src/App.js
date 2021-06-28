import React from "react";
import { BrowserRouter, Route, Link, NavLink,Switch, Redirect } from "react-router-dom";
import Post from "./post";
import Posts from "./posts";

import About from "./about";

import "./index.css";
import Home from "./home"
export default function App(){

return(
<div>

<div class="container-lx">
 
<BrowserRouter>

<div class="navbarposition">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
  <NavLink class="nav-link" to="/home"><img class="react-logo" src="logo192.png"></img></NavLink><h4>React</h4>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
      <button><NavLink class="nav-link" to="/home">Home</NavLink></button>  
        </li>
        <li class="nav-item">
        <NavLink class="nav-link" to="/post">Posts</NavLink>
        </li>
        <li class="nav-item">
        <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
       
    </div>
  </div>
</nav>

</div>





<Switch>
  
  <Route  path="/home" component={Home}></Route>
  <Route path="/about" component={About}/>
  <Route path="/post/:id" component={Posts} />
<Route path="/post" component={Post} />

<Route exact path="/" ><Redirect to="/home" /></Route>
</Switch>



</BrowserRouter>

</div>


</div>
)


}
