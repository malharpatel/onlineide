import React from 'react';

const EditorContext = React.createContext("EditorProvider");

class EditorProvider extends React.Component { 
  render () {
    const { children } = this.props; 
    return (
      <EditorContext.Provider value="chicken">
      {children}
      </EditorContext.Provider>
    );
  }
}

export default EditorProvider;
export const EditorConsumer = EditorContext.Consumer;