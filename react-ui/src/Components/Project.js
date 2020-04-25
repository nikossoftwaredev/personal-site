import React from "react"
import '../projectDisplay.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Project(props){    
    return(        
        <div className = "projectDiv">           
            <h3 className = "projectT">{props.project.name}</h3>
            <p className = "projectD">{props.project.description}</p>                        
            <Router>
            <p className = "projectD" style = {{display : !props.project.ref && "none"}}>View project on:<Link to="/Dino"><img className = "icon" src={require('../Assets/logo-black.png')} alt ="git"></img></Link></p>               
                <Switch>
                    <Route path="/Dino">
                        <About />
                    </Route>  
                </Switch>
            </Router>

            <p  className = "projectD">View on GitHub: <a href={props.project.url}><img className = "icon" src={require('../Assets/gitLogo.png')} alt ="logo"></img></a></p>                
        </div>
        
    );
}

function About() {
    return(
        <a href="..\Projects\Artificial-Intelligent-DInos\index.html">Redirect to Html page</a>
    );
}
   


export default Project;