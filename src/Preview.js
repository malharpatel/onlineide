import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const tmpcode = "<h1> hi </h1>";

class Preview extends React.Component { 
  componentDidMount() {
    const iframe = document.getElementById('tmp')
    const iframedoc = iframe.contentDocument || iframe.contentWindow.document;

    iframedoc.body.innerHTML = tmpcode
  }
  render() {
    return (
      <div> 
      <iframe id="tmp"/>
      </div>
    );
  }
}

export default Preview;