import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css'
import Home from './pages/Home';
import Orders from './pages/Orders'
import Customer from './pages/Customer';
import Footer from './components/Footer';
import MakeOrder from './pages/MakeOrder';

class App extends React.Component {

  render=()=> (
    <Router>
      <>
        <Switch>

          <Route exact path ="/orders">
            <Orders />
          </Route>

          <Route exact path ="/customer">
            <Customer />
          </Route>

          <Route exact path ="/menu">
            <MakeOrder menuReady={this.menuReady}/>
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer />
      </>
    </Router>
  );
}

export default App;
