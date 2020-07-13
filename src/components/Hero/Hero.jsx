import React, { Component } from 'react'
import './Hero.scss'
import Me from './assets/me.jpg'
import TelegramIco from './assets/telegram-ico--blue.svg'


export class Hero extends Component {
  render() {
    return (
        <div className="hero">
          <div className="container">
            <div className="wrapper">
              <div className="image">
                <span className="vertical-text">IT'S ME!</span>
                <img src={ Me } alt=""/>
              </div>
              <div className="content">
                <div className="head">
                  <h1>Expert of user interfaces</h1>
                  <h2>UI/UX design & front-end development</h2>
                </div>
                <ul className="services">
                    <li>Landing Page</li>
                    <li>eCommerce</li>
                    <li>Figma / PSD to HTML</li>
                    <li>Responsive / Adaptive Design</li>
                    <li>Animation</li>
                    <li>Page Speed Optimization</li>
                    <li>Tech & UX Audit</li>
                    <li>Web-Analytics</li>
                </ul>
                <div className="contacts">
                  <button>Contact me</button>
                  <a class="telegram-link" href="#">
                    <img src={TelegramIco} alt=""/>
                    <span>Open Chat!</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}