import React from 'react';
import {Route} from 'react-router-dom'
import "./App.css"

import {Home} from './Components/Home/Home';
import {NavBar} from './Components/Navbar/Navbar';
import {AboutMe} from './Components/Home/AboutMe';
import {Projects} from './Components/Home/Projects/Projects';
import {Study} from './Components/Home/Study/Study';
import {ContactMe} from './Components/Home/ContactMe/ContactMe';
import {Skills} from './Components/Home/Skills/Skills';
function App() {
  return (
    <div className="App">  
        <Route path="/" component={NavBar} />
        <Route path="/" component={Home}></Route>
        <Route path="/" component={AboutMe}/>
        <Route path="/" component={Projects}/>
        <Route path="/" component={Study} />
        <Route path="/" component={Skills}/>
        <Route path="/" component={ContactMe} />
    </div>
  );
}

export default App;
