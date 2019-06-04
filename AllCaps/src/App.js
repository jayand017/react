import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <input type="text" value={this.props.input}  onChange={(e) => this.props.handleKeyPress(e)}  />
    );
  }
}

//slice of the state
const mapStateToProps = (state) => {
    return { 
      input: state.input
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeyPress: (e) => dispatch({type: 'UPDATE', payload: e.target.value.toUpperCase()})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
