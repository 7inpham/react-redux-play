import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import Hello from './components/Hello';

function App({name, dispatch}) {

  const createSetNameAction = (value) => {
    return {
      type: 'SET_NAME',
      value
    }
  }

  const createSetNameActionAsync = (value) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch({
          type: 'SET_NAME',
          value
        })
      }, 1000);
    };
  }

  const handleChangeName = (e) => {
    const value = e.target.value
    if (value.includes('async')) {
      dispatch(createSetNameActionAsync(value))
    } else {
      dispatch(createSetNameAction(value))
    }
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={name} onChange={handleChangeName}/>
      </div>
      <Hello/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name
})

export default connect(mapStateToProps)(App)
