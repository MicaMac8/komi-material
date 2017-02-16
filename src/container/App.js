import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import '../assets/fonts/roboto-font-face-master/index.css'

import HomePage from './HomePage'

import './app.css'
import '../assets/styles/normalize.css'
import '../assets/styles/box-sizing.css'
import '../assets/styles/base.css'

injectTapEventPlugin()

export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider>

          <HomePage />

      </MuiThemeProvider>
    )
  }
}
