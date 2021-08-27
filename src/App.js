import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';

import LoginPage from './pages/login';
import NewRecipe from './pages/nova-receita';
import Recipes from './pages/receitas';
import Provider from './components/provider';

function App() {
  const [user, setUser] = useState({ logged: false })

  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Header user={user} setUser={setUser} />
          <main>
            <Switch>
              <Route path="/home">
              </Route>
              <Route path="/receitas">
                <Recipes />
              </Route>
              <Route path="/login">
                <LoginPage user={user} setUser={setUser} />
              </Route>
              <Route path="/nova-receita">
                <NewRecipe />
              </Route>
            </Switch>
          </main>
          {user.logged &&
            <footer>
              <Navigation setUser={setUser} />
            </footer>
          }
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
