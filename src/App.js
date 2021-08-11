import React, { useState } from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';

function App() {
  const [user,setUser] = useState({logged:true})
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/home"></Route>
            <Route path="/login"></Route>
            <Route path="/receitas"></Route>
            <Route path="/nova-receita"></Route>
          </Switch>
        </main>
        {user.logged &&
          <footer>
              <Navigation />
          </footer>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
