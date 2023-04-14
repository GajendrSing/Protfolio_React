import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import "./HeaderStyle.css"
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import { state, handleClick } from "react"

class Header extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
 render(){
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'> Trippy</h1>
        <div className='menu-icons' onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ?"nav-menu active": 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}><i class={item.icon}></i>{item.title}</Link>
              </li>
            )
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    )
  }
  
}

export default Header