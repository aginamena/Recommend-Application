
import './App.css';
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Books from './components/Books';
import AddBook from './components/AddBook';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import EditBook from './components/EditBook';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [])
  return (
    <Router>
      <div className="App">
        <Navigation isLoggedIn={isLoggedIn} setLogin={condition => setIsLoggedIn(condition)} />
        <Switch>
          {
            isLoggedIn ?
              <Route exact path="/" component={Home} /> :
              <Route exact path="/">
                <Login setLogin={condition => setIsLoggedIn(condition)} />
              </Route>
          }
          <Route exact path="/books" component={Books} />
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/register">
            <Register setLogin={condition => setIsLoggedIn(condition)} />
          </Route>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editBook/:bookId" component={EditBook} />
          {/* //createdBookUserProfle */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
