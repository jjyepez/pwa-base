import React, { Component } from 'react'

import Home from './pages/containers/Home'

class App extends Component {
  state = {
    currentPage: <Home />
  }
  render() {
    return (
      <div>
        { this.state.currentPage }
      </div>
    )
  }
}

export default App