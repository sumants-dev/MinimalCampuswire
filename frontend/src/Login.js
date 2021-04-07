import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const loginUser = () => {
    axios.post('/account/login', { username, password })
      .then(res => {
        setUsername('')
        setPassword('')
        history.push('/')
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  // Ripped the signup form from Bulma
  return (
    <>
      <div className="columns">
        <div className="column"></div>
        <div className="section column">
          <h1> Campuswire Lite Login</h1>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="Username" placeholder="Username" onChange = {e => setUsername(e.target.value)} value = {username}/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" onChange = {e => setPassword(e.target.value)} value = {password}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control">
              <button className="button is-success" type="button" onClick = {() => loginUser()}>
                Login 
              </button>
            </p>
          </div>
        </div>
        
        <div className="column"></div>
      </div>
    </>
    
  )

}

export default Login
