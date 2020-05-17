import React, { useState } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Hello from './components/Hello';

function App({name, dispatch}) {

  const handleChangeName = (e) => {
    dispatch({
      type: 'SET_NAME',
      value: e.target.value
    })
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
