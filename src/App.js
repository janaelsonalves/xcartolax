import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./components/SignIn";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={() => <div>Home</div>} />
        <Route path="/about/" component={() => <div>About</div>} />
        <Route path="/users/" component={() => <div>Users</div>} />
      </div>
    </Router>
    // <div className="App">
    //   {/* <header className="App-header"></header> */}
    //   {/* <SignIn /> */}
    // </div>
  );
}

export default App;
