import React, { Component } from 'react'
import { Page } from 'baseComponents'
import { Hero } from 'components'

export class Main extends Component {
  render() {
    return (
      <Page className="about-page">
        <Hero />
      </Page>
    )
  }
}