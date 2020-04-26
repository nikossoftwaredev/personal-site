import React from "react"


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
               
                <p className = "projectD">
                    View project on:
                    <a href = {props.project.ref} style = {{display : !props.project.ref && "none"}} target="_blank">
                        <img className = "icon" src={!props.project.logo ? require('../Assets/gitLogo.png'):require(`../Assets/${props.project.logo}`)} alt ="link"></img>
                    </a>
                    <a href={props.project.git} style = {{display : !props.project.git && "none"}} target="_blank">
                        <img className = "icon" src={ require('../Assets/gitLogo.png')}  alt ="logo"></img>
                    </a>
                    
                </p>               
                   

                            
            </div>  
        
    );
}


   


export default Project;