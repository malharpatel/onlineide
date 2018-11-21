import React from 'react';

const EditorContext = React.createContext();

class EditorProvider extends React.Component { 
  render () {
    const { children } = this.props; 
    return (
      <EditorContext.Provider value={{"chicken": 5}}>
      {children}
      </EditorContext.Provider>
    );
  }
}

export default EditorProvider;