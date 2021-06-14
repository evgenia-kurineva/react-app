import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Textbook from './pages/Textbook/Textbook';

const App = (): JSX.Element => (
  <div className="App">
    <Background>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/textbook" component={Textbook} />
        </Switch>
      </main>
    </Background>
  </div>
);

export default App;
