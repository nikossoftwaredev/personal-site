import React from "react"
import Home from "./Home"
import Project from "./Project"
import About from "./About"
import Resume from "./Resume"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




class TopBar extends React.Component{   

    constructor(){
        super();

        this.state = {            
            ho : true,
            po : false,
            ab : false,
            re : false
        };

        this.info = {
            fetching : true,
            projects : null
        };

        this.hightLight = this.hightLight.bind(this); //bind the function to class in order to use this.state
    }

    hightLight(what){        
        this.setState(prevState => {            
            let newState = {            
                ho:false,
                po:false,
                ab:false,
                re:false
            }
            
            newState[what] = true;
         
            return newState;
            
        })
    }

    async componentDidMount(){
        const url = "/projects"
        const response = await fetch(url);
        const data = await response.json();
        this.info = {fetching : false , projects : data }
        console.log(this.info.projects);
        console.log(this.info.fetching);
    }

    render(){
        //console.log(this.state.fetching? "fetching" : "projects" );
        //Project Data should be fetched from my API 
        
        const myProjects = this.info.fetching ? null : this.info.projects.map( data => <Project key = {data.id} project = {data}/>)
        
            
        
        return(  
            <div>
            <Router>             
                <div className = "navbar">
                    
                    <div style = {{display: "inline-block"}}><Link onClick = {() => this.hightLight("ho")} to="/Home"><img className = "logo" src={require('../Assets/logo.png')} alt ="git"></img></Link></div>
                    <div className = 'buttons'>
                        <Link className="navButton" onClick = {() => this.hightLight("ho")} style = {{color: this.state.ho? "#fff" : "#a5a1a1" }} to="/Home">HOME</Link>
                        <Link className="navButton" onClick = {() => this.hightLight("po")} style = {{color: this.state.po? "#fff" : "#a5a1a1" }} to="/Portfolio">PORTFOLIO</Link>
                        <Link className="navButton" onClick = {() => this.hightLight("ab")} style = {{color: this.state.ab? "#fff" : "#a5a1a1" }} to="/About">ABOUT</Link>
                        <Link className="navButton" onClick = {() => this.hightLight("re")} style = {{color: this.state.re? "#fff" : "#a5a1a1" }} to="/Resume">RESUME</Link>
                    </div>          
                  </div>      
                <div>
                    <Switch>
                        <Route path="/Home">
                            <Home />
                        </Route> 
                        <Route path="/Portfolio">  
                        {this.info.fetching? null:myProjects}                                                
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Resume">
                            <Resume />
                        </Route> 
                    </Switch>
                </div>                          
                    
            </Router>   
            </div>        
            
        );

    }

   
    
}

export default TopBar;