import React, { Component } from 'react'
import './Header.scss'

export class Header extends Component {
  render() {
    return (
        <header>

          <div className="container">

            <div className="wrapper">
              <div className="logo">
                <span>Aleksandr Shirshov</span>
              </div>
              <nav>
                <a href="#">About me</a>
                <a href="#">Projects</a>
                <a href="#">Blog</a>
                <a href="#">Contacts</a>
              </nav>
            </div>

          </div>

        </header>
    )
  }
}