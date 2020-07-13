import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import * as pages from './pages'

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={pages.Main} />
      </Switch>
    )
  }
}