import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
    render() {

        // Conditional Rendering

        // 4. Short circuit operator(it return something or nothing)
        return this.state.isLoggedIn && <div>Welcome Umang</div>

        // 3. Ternary conditional operator
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Umang</div> :
        //     <div>Welcome Guest</div>
        // )

        // 2. Element variables
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Umang</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // 1. If/else
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Umang</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
    }
}

export default UserGreeting
