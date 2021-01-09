import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route  path="/reports" component={Reports} />
          <Route  path="/products" component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
