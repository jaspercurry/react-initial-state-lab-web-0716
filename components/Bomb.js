const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {secondsLeft: props.initialCount}
  }

  render() {
    if (this.state.secondsLeft === 0) {
    return <div>Boom!</div>
    } else {
    return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }

  }


}

module.exports = Bomb;
