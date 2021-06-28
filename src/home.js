import React from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import "./index.css";
import App from "./App" 
export default function Home(props)
{
    console.log(props);

return(<div class="container-lx" >
    
<div class="react-container" style={{ backgroundImage: "url(background.jpg)" }}>
<div class="react-intro">React </div>
<h4>A Javascript library for building user interfaces.</h4>
<div class=" tutorial">
<tr>
    <td><button type="button" class="btn btn-info">Get started</button></td>
<td><span class="tshift">Take a tutorial</span></td>
</tr>

</div>
</div>

<div class="contentpos1">

<div class="row align-items-start">
    <div class="col-4">
    <div class="contentpos">
        <span class="contenttitle"> Declarative</span><br></br>
    Declarative
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.
Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.

</div>
    </div>


    <div class="col-4">
    <div class="contentpos">
    <span class="contenttitle"> Component-Based</span><br></br>
    Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.
    </div></div>
    <div class="col-4">
    <div class="contentpos">
    <span class="contenttitle"> Learn Once, Write Anywhere</span><br></br>
    Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.
Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.  </div>

    </div ></div>

    </div>

</div>)




}