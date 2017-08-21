import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
    ;
  }
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
registerServiceWorker();
