import React, { lazy } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Privacy from './Pages/Privacy.jsx';
import Tos from './Pages/Tos.jsx';
import Main from './Pages/Main.jsx';
import Introducing from './Pages/Introducing.jsx';
import Information from './Pages/Information.jsx';
import Docs from './Pages/Docs.jsx';
import Footer from './Pages/Footer.jsx';
import Invite from './Pages/Invite';
import CInvite from './Pages/CInvite';
import SInvite from './Pages/SInvite';
import Active from './Pages/Active';
import Premium from './Pages/Premium';
// import Black from './Pages/Black.jsx'
import Navbar from './Pages/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound">
      <p>404</p>
      <p className="mdtext">찾으시려는 페이지가 존재하지 않아요.</p>
    </div>
  );
}

function isIE() {
  let ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  let is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
  return is_ie;
}

function App() {
  lazy(() => import('./Assets/JS/ad375d374e.js'));
  if (isIE()) window.location.assign('/ie.html');

  if (window.location.protocol !== 'https:') {
    if (!window.location.href.includes('localhost')) {
      window.location.href = window.location.href.replace('http://', 'https://');
    }
  }

  return (
    <ChakraProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route path={"/docs/:name"}>
          <Docs />
        </Route>
        <Route path={"/docs"}>
          <Docs />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/tos">
          <Tos />
        </Route>
        <Route path="/premium">
          <Premium />
        </Route>
        <Route path="/active">
          <Active />
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
    </ChakraProvider>
  );
}

export default App;
