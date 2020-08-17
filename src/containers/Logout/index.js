import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    constructor(prop){
        super(prop)
      localStorage.removeItem('Token')
    }
    render() {
       
        return (
            <div>
            <button className=' btn-danger'><Link to='/'>Login Again</Link></button>    
            </div>
        )
    }
}
