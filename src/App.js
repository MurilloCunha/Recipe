import React, { useState } from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import './App.css';
import CategorySelector from './components/category-selector';
import Header from './components/header';
import Navigation from './components/navigation';
import RecipeCard from './components/recipe-card';
import SearchInput from './components/search-Input';
import LoginPage from './pages/login';

function App() {
  const [user,setUser] = useState({logged:false})

  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} setUser={setUser}/>
        <main>
          <Switch>
          <Route path="/home">
          </Route>
          <Route path="/receitas">
            <div style={{overflow:'auto',display:"flex",height:'calc(100vh - 8.5rem)', width:"100%", flexDirection:"column",alignItems:"center", boxSizing:"border-box",padding:"1rem"}}>
              <SearchInput />
              <CategorySelector />
              <RecipeCard />
            </div>
          </Route>
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
