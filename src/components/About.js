import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        console.log("Component Mounted");
    }
    render(){
        return(
            <div>
                <h1>About Class Component</h1>
                <h2>My first react App</h2>
                <User name={"Ghazala Zameer (function)"}/>
                <UserClass name={"Ghazala Zameer (class)"} location={"Aligarh, UP"}/>
            </div>
        )
    }
}
export default About;

