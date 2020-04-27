import React from "react"
import Project from "./Project"




class DisplayProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            projects: null
        };

        this.props.change("po");

    }

    async componentDidMount() {
        const url = "/projects"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({fetching : false , projects : data }  ); 
    }

    render(){
        
        //Project Data should be fetched from my API 
        this.state.fetching ? console.log("fetching") : console.log(this.state.projects);       
        const myProjects = this.state.fetching ? null : this.state.projects.map( data => <Project key = {data.id} project = {data}/>)

        return(
        <div style  ={{ marginBottom :"1vw" ,marginLeft : "4vw"}}>      
            {this.state.fetching? <h1>Fetching data...</h1>:myProjects}        
        </div> 
        );
    }
}

export default DisplayProjects;