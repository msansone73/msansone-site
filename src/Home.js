import React, {Component} from 'react'

class Home extends Component {
    render(){
        console.log("Home state="+JSON.stringify(this.state))
        return(        
            <h1>Home</h1>
        )
    }
}

export default Home