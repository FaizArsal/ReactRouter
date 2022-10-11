import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import About from "../About";
import Contact from "../Contact";
import Service from "../service";
import Home from "../home";
import NotFound from "../Notfound";
import Profile from "../Profile";

export default function WebRouter() {
  return (


    <Router>

<div>
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">About</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
    <li><Link to="/service">Service</Link></li>
    <li><Link to="/Profile">Profile</Link></li>
    
</ul>


</div>


<Routes>


<Route path='/' element={<Home/>} />
<Route path='About' element={<About/>} />       
<Route path='Contact' element={<Contact/>} />
<Route path='Service' element={<Service/>} />
<Route path='Profile/:userName' element={<Profile/>} />
<Route path='*' element={<NotFound/>} />
</Routes>
    </Router>
  );
}