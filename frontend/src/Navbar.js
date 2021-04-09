import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Navbar = (props) => {
  const { isLogin } = props
  const history = useHistory()

  const logOut = () => {
    axios.post('/account/logout', {})
      .then(res => {
        history.push('/')
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  const loggedOutButtons = () => {
    return (
      <>
        <a className="button is-primary" onClick = {(e) => {history.push('/signup')}}>
          <strong>Sign up</strong>
        </a>
        <a className="button is-light" onClick = {(e) => {history.push('/login')}}>
          Log in
        </a>
      </>
    )
  }

  const loggedInButtons = () => {
    return (
      <>
        <a className="button is-light" onClick = {(e) => {logOut()}}>
          Log Out
        </a>
      </>
    )
  }

  const navbarButtons = isLogin ? loggedInButtons() : loggedOutButtons()

  return (
    <>
      <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" onClick = {(e) => {history.push('/')}}>
            Campuswire Lite
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {navbarButtons}
              </div>
            </div>
          </div>
      </nav>
    </>)
}

export default Navbar
