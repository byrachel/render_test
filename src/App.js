import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeList from './components/homeList/HomeList';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>Application Test</p>
        </header>
    
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/homeList" component={HomeList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
