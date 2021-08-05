import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Textbook from './pages/Textbook/Textbook';
import NotFound from './pages/NotFound/NotFound';
import Game from './pages/Game/Game';

const App = (): JSX.Element => {
  const { pathname } = useLocation();
  const isGamePlaying = pathname.includes('game');

  return (
    <div className="App">
      <Background>
        {!isGamePlaying && <Header />}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/textbook" component={Textbook} />
            <Route exact path="/game" component={Game} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Background>
    </div>
  );
};

export default App;
