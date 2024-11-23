import React from "react";
import Home from './RRoutees/Home'
import About from "./RRoutees/About";
import User from './RRoutees/User';
import './Apps.css';
import RecipeApp from "./ReciepeApp";
import OldBook from "./RRoutees/OldBook";
import NewBook from "./RRoutees/NewBook";
import Login from "./RRoutees/Login";
import DashBoard from "./RRoutees/Dashboard";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from './assets/log.png';


function App() {

  
  return (
    <Router>
      <header>
      
      <nav>
        <ul>
        <li><Link className={"l-s"} to="/">Home</Link></li>
        <li><Link className={"l-s"} to="/about">About</Link></li>
        <li><Link className={"l-s"} to="/user/1">User 1</Link></li>
        <li><Link className={"l-s"} to="/user/2">User 2</Link></li>
        <li><Link className={"l-s"} to="/book/o-book">OldBook</Link></li>
        <li><Link className={"l-s"} to="/book/n-book">NewBook</Link></li>
        <li><Link className={"l-s"} to="/login">Login</Link></li>
        </ul>
      </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path='/book'>
             <Route path='o-book' element={<OldBook />}/>
             <Route path='n-book' element={<NewBook />}/>
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<DashBoard />}/>
      </Routes>
    </Router>
  );
}

export default App;
