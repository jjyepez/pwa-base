import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './state/store'

import Login from './pages/containers/Login'
import SignUp from './pages/containers/SignUp'
import Home from './pages/containers/Home'
import Settings from './pages/containers/Settings'

class App extends Component {
  state = {
    currentContext: 'Login'
  }
  componentDidMount = () => {
    store.subscribe( this.handleChange )
  }
  handleChange = () => {
    const currentContext = store.getState().app.currentContext
    this.setState({
      currentContext
    })
  }
  setCurrentContext = context => {
      store.dispatch({
          type: 'CHANGE_CURRENT_CONTEXT',
          payload: {
              app: {
                  currentContext: context
              }
          }
      })
  }
  setContext = () => {
    switch( this.state.currentContext ) {
      case 'SignUp'  : return <SignUp setCurrentContext   = { this.setCurrentContext } />
      case 'Login'   : return <Login setCurrentContext    = { this.setCurrentContext } />
      case 'Home'    : return <Home setCurrentContext     = { this.setCurrentContext } />
      case 'Settings': return <Settings setCurrentContext = { this.setCurrentContext } />
      default:
        return <div>Err App</div>
    }
  }
  render() {
    return (
      <Provider store = { store }>
        { this.setContext() }
      </Provider>
    )
  }
}

export default App