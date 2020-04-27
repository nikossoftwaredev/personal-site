import React from "react"
import DisplayProjects from "./DisplayProjects"
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
            po : false,
            ab : false,
            re : false
        };

        
        this.hightLight = this.hightLight.bind(this); //bind the function to class in order to use this.state
    }

    hightLight(what){        
        this.setState(prevState => {            
            let newState = {            
                po:false,
                ab:false,
                re:false
            }
            
            newState[what] = true;
         
            return newState;
            
        })
    }

    
    render(){
        
        
            
        
        return(  
            <div>
            <Router>             
                <div className = "navbar">
                    
                    <div style = {{display: "inline-block"}}><Link onClick = {() => this.hightLight("ho")} to="/Home"><img className = "logo" src={require('../Assets/logo.png')} alt ="git"></img></Link></div>
                    <div className = 'buttons'>                        
                        <Link className="navButton" onClick = {() => this.hightLight("po")} style = {{color: this.state.po? "#fff" : "#a5a1a1" }} to="/Portfolio">PORTFOLIO</Link>
                        <Link className="navButton" onClick = {() => this.hightLight("ab")} style = {{color: this.state.ab? "#fff" : "#a5a1a1" }} to="/About">ABOUT</Link>
                        <Link className="navButton" onClick = {() => this.hightLight("re")} style = {{color: this.state.re? "#fff" : "#a5a1a1" }} to="/Resume">RESUME</Link>
                    </div>          
                  </div>      
                <div>
                    <Switch>                        
                        <Route path="/Portfolio">
                            <DisplayProjects change = {this.hightLight} />                                                                   
                        </Route>
                        <Route path="/About">                                
                            <About change = {this.hightLight} />
                        </Route>
                        <Route path="/Resume">
                            <Resume change = {this.hightLight} />
                        </Route> 
                    </Switch>
                </div>                          
                    
            </Router>   
            </div>        
            
        );

    }

   
    
}

export default TopBar;