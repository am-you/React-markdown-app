import React, { Component } from 'react';
import './index.css';
import marked from 'marked';

import { sampleText } from './sampleText';

class App extends Component {
  state = {
    text: sampleText
  };

  componentDidMount () {
    const text = localStorage.getItem('text');

    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  };

  componentDidUpdate () {
    const { text } = this.state;
    localStorage.setItem('text', text);
  };

  handleChange = event => {
    const text = event.target.value;
    this.setState({ text });
  };

  renderText = text => {
    const __html = marked(text);
    return { __html };
  };

  render () {
    return (
      <div className='container'>
        <img src="avataaars.png" alt="logo" height="280" width="264" className="logo"/>
        <div className='row'>
          <div className='col-sm-6 mark'>
            <textarea
              onChange={this.handleChange}
              value={this.state.text}
              className='form-control'
              rows='35' />
          </div>
          <div className='col-sm-6 html'>
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
