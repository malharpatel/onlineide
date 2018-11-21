import React from 'react';
import { EditorConsumer } from './EditorProvider.js';

const tmpcode = "<h1> hi </h1>";


class Preview extends React.Component { 
  componentDidMount() {
    const iframe = document.getElementById('tmp');
    const iframedoc = iframe.contentDocument || iframe.contentWindow.document;

    iframedoc.body.innerHTML = tmpcode;

  }
  render() {
    console.log(this);
    return (
      <EditorConsumer> 
        <iframe id="tmp"/>
      </EditorConsumer>
    );
  }
}

export default Preview;