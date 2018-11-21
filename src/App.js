import React from 'react';
import './App.css';
import Editor from './Editor.js';
import Preview from './Preview.js';
import EditorProvider from './EditorProvider';

class App extends React.Component {
  render() {
    return (
      <EditorProvider>
        <Editor/>
        <Preview/>
      </EditorProvider>
    );
  }
}

export default App;
