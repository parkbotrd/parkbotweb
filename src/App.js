import React from 'react';
import './App.css'
import Privacy from './Components/Privacy.jsx'
import Tos from './Components/Tos.jsx'
import Main from './Components/Main.jsx'
import Introducing from './Components/Introducing.jsx'
import Information from './Components/Information.jsx'
import Docs from './Components/Docs.jsx'
import Footer from './Components/Footer.jsx'
// import Black from './Components/Black.jsx'
import Navbar from './Components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <p>404</p>
      <p className="mdtext">찾으시려는 페이지가 존재하지 않아요.</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/docs/:name">
          <Docs />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/Tos">
          <Tos />
        </Route>
        <Route exact path="/">
          {/*<Black />*/}
          <Main />
          <Introducing />
          <Information />
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
