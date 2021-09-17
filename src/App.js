import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Hello World!</Button>
      </header> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/login" component={LoginForm} /> */}
          {/* <Route path="/signup" component={SignUpForm} /> */}
          {/* <Route path="/sample" component={SamplePage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
