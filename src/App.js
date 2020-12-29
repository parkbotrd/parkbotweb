import React from 'react';
import './App.css'
import Privacy from './Pages/Privacy.jsx'
import Tos from './Pages/Tos.jsx'
import Main from './Pages/Main.jsx'
import Introducing from './Pages/Introducing.jsx'
import Information from './Pages/Information.jsx'
import Docs from './Pages/Docs.jsx'
import Footer from './Pages/Footer.jsx'
import Invite from './Pages/Invite'
import CInvite from './Pages/CInvite'
import SInvite from './Pages/SInvite'
// import Black from './Pages/Black.jsx'
import Navbar from './Pages/Navbar.jsx'
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
        <Route path="/invite/recommend">
          <Invite />
        </Route>
        <Route path="/invite/custom">
          <CInvite />
        </Route>
        <Route path="/invite/success">
          <SInvite />
        </Route>
        <Route path="/info">
          <Information />
        </Route>
        <Route exact path="/">
          {/*<Black />*/}
          <Main />
          <Introducing />
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
