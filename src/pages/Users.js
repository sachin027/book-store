import React, { Component } from 'react'
import axios from 'axios'
import UserDetail from './UserDetail'

class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users : []
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            // console.log(response)
            this.setState({
                users : response.data
            })
        })
        .catch( error => {
            console.log(error)
        })
    }

    render() {
        const { users } = this.state
        return (
            <div>
                {users.map((user) => <UserDetail user={user} key={user.id + user.username}/>)}
            </div>
        )
    }
}

export default Users
