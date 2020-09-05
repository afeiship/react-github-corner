import React from 'react';
import ReactDOM from 'react-dom';
import ReactGithubCorner from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactGithubCorner value="https://github.com/afeiship" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
