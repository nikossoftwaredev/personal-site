import React from "react"

class Home extends React.Component{
    constructor(){
        super();

    }

    render(){

        return(

            <div className = "backgroundDiv">        
                <div className = "container">     
                <h3 className = "projectT">Personal Website</h3>      
                    <p className = "aboutText">This site is made for displaying some of my projects and some information about myself</p>
                </div>
            </div>
         
        )    
        
    }
}

export default Home