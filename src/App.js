import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'jquery/dist/jquery.min.js';
import { Switch, Route } from 'react-router-dom';
import Navbarline from './Component/Navbarline';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Contact from './Component/Contact.jsx';
import Gallery from './Component/Gallery.jsx';
import Blog2 from './Component/Blog2.jsx';
import Program from './Component/Program.jsx';
import Franchies from './Component/Franchies.jsx';

function App() {
  return (
    <>
      <Navbarline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/blog" component={Blog2} />
        <Route exact path="/program" component={Program} />
        <Route exact path="/franchies" component={Franchies} />
      </Switch>
    </>
  );
}

export default App;
