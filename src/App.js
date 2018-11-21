import React from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Editor/> 
      </div>
    );
  }
}

export default App;
