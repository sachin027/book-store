import React, { Component } from "react"
import UserList from "./UserList"
import HOC from "./HOC"

// class Welcome extends Component {
//     render() {
//         return <h1>Welcome {this.props.name}</h1>
//     }
// }

// class Welcome extends Component {
//     render() {
//         //const {state1,state2,...} = this.state
//         const {name} = this.props
//         return <h1>Welcome {name}</h1>
//     }
// }

// export default Welcome 

// class Message extends Component {
//     constructor() {
//         super()
//         this.state = {
//             message : 'Welcome visitor'
//         }
//     }

//     changeMessage() {
//         this.setState({
//             message : 'Thank you for subscribing'
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <button onClick={()=> this.changeMessage()} >Subscribe</button>
//             </div>
//         )
 
//     }
// }

// export default Message

class Home extends Component {
  render() {
    const userData = [{id : 115, name:"Umang"},{id : 80, name:"Dhruv"},{id : 58, name:"Sajan"}]
    const Users = HOC(UserList,userData)
    return(<Users/>)
  }
}

export default Home
