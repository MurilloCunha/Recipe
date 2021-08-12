import React, { useState } from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import LoginPage from './pages/login';

function App() {
  const [user,setUser] = useState({logged:false})
  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} setUser={setUser}/>
        <main>
          <Switch>
            <Route path="/home"></Route>
            <Route path="/login">
              <LoginPage user={user} setUser={setUser}/>
            </Route>
            <Route path="/receitas"></Route>
            <Route path="/nova-receita"></Route>
          </Switch>
        </main>
        {user.logged &&
          <footer>
              <Navigation setUser={setUser}/>
          </footer>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
