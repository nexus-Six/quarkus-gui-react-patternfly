import React, {Component} from 'react';
import Particles from './components/particles'

class App extends Component {
  state = {
    particles: []
  }

  componentDidMount() {
    fetch('/particles')
    .then(res => res.json())
    .then((data) => {
      this.setState({ particles: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <Particles particles={this.state.particles} />
    );
  }
}

export default App;