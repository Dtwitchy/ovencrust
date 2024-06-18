// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import MyOrdersPage from './pages/MyOrdersPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import VerifyPage from './pages/VerifyPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/myorders" component={MyOrdersPage} />
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/verify" component={VerifyPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;