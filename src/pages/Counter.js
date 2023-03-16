import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment(){
        // this.setState(
        //     {
        //     count : this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback value',this.state.count) // 1 COME FOR THIS
        //     }
        // )
        // console.log(this.state.count) // 0 COME FOR THIS

        this.setState(prevState =>({
            count : prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count : prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {/* <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()} >Increment</button> */}
                {this.props.render(this.state.count,this.incrementCount)}
            </div>
        )
      }
}

export default Counter
