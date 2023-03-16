import React, { Component } from 'react'
import './loginForm.css'

class LoginForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         email : '',
         password : ''
      }
    }

    handleUsernameChange = event => {
        this.setState ({
            username : event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState ({
            email : event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState ({
            password : event.target.value
        })
    }
    
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.email} ${this.state.password}`)
        event.preventDefault()
    }

    render() {
        const {username , email , password} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div  className={`text-margin text-padding`}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div className={`text-margin text-padding`}>
                    <label>Email</label>
                    <input type="text" value={email} onChange={this.handleEmailChange}/>
                </div>
                <div className={`text-margin text-padding`}>
                    <label>Password</label>
                    <input type="password" value={password} onChange={this.handlePasswordChange}/>
                </div>
                <button>Submit</button>
            </form>
        )
      }
}

export default LoginForm
