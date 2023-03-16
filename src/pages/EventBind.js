import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : 'GoodBye'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message : 'GoodBye'
        })
    }
    
    render() {
        return (
          <div>
            <div>{this.state.message}</div>
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} 
            {/* <button onClick={() => this.clickHandler()}>Click</button> */}
            <button onClick={this.clickHandler}>Click</button>
          </div>
        )
    }
}

export default EventBind

// 4 approach
// 1.binding in render
// 2.arrow function in render
// 3.binding in the class constructor (best option right now)
// 4.class property as arrow function