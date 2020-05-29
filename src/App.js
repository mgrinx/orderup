import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css'
import Home from './pages/Home';
import Orders from './pages/Orders'
import Customer from './pages/Customer';
import Footer from './components/Footer';
import MakeOrder from './pages/MakeOrder';
import ViewOrder from './pages/ViewOrder'
import DonePage from './components/DonePage';

class App extends React.Component {

  render=()=> (
    <Router>
      <>
        <Switch>

          <Route exact path ="/orders" component={Orders} />
          <Route exact path ="/vieworder" component={ViewOrder} />
          
          <Route exact path ="/customer">
            <Customer />
          </Route>

          <Route exact path ="/done" component={DonePage} />

          <Route exact path ="/menu" component={MakeOrder} />

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
