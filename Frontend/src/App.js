
import './App.css';
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Books from './components/Books';
import AddBook from './components/AddBook';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import EditBook from './components/EditBook';
import AllUsers from './components/AllUsers';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sortByCategory, setSortByCategory] = useState({})
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
        <Navigation
          isLoggedIn={isLoggedIn}
          setLogin={condition => setIsLoggedIn(condition)}
          searchByCategory={newData => setSortByCategory(newData)}
        />
        <Switch>
          {
            isLoggedIn ?
              <Route exact path="/" component={Home} /> :
              <Route exact path="/">
                <Login setLogin={condition => setIsLoggedIn(condition)} />
              </Route>
          }
          <Route exact path="/books">
            <Books sortByCategory={sortByCategory} />
          </Route>
          <Route exact path="/addbook" component={AddBook} />
          <Route exact path="/register">
            <Register setLogin={condition => setIsLoggedIn(condition)} />
          </Route>
          <Route exact path="/profile/:emailAddress" component={Profile} />
          <Route exact path="/editBook/:bookId" component={EditBook} />
          <Route exact path="/allUsers" component={AllUsers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
