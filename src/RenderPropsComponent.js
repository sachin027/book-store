import React, { Component } from 'react'

class RenderPropsComponent extends Component {
  render() {
    return (
        <div>
            {this.props.render()}
        </div>
    )
  }
}

export default RenderPropsComponent
