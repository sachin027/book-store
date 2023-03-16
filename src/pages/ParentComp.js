import React, { Component } from 'react'
// import PureComp from './PureComp'
// import RegComp from './RegComp'
import MemoComp from '../component/MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'umang'
      }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : 'umang'
            })
        },2000)
    }

    render() {
        console.log('*******Parent Comp Rnder*******')
        return (
          <div>
            Parent Component
            {/* <RegComp name={this.state.name}></RegComp>
            <PureComp name={this.state.name}></PureComp> */}
            <MemoComp name={this.state.name}/>
          </div>
        )
    }
}

export default ParentComp
