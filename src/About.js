import React, {Component} from 'react'

class About extends Component{
    render(){
        console.log("sobre state="+JSON.stringify(this.state))
        return (
            <h1>About ...</h1>
        )
    }
}

export default About