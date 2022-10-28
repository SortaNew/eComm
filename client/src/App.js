import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp"
import ItemList from "./ItemList"
import UserItemList from "./UserItemList"
import LogIn from "./LogIn.js"
import SubmitItem from "./SubmitItem"
import SubmitUserItem from "./SubmitUserItem"
import Navbar from "./Navbar"

function App() {
  const [items, setItems] = useState([]);
  const [userItems, setUserItems] = useState([])
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetch("/user_items")
      .then((r) => r.json())
      .then((data) => setUserItems(data));
  }, []);


  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={setUser}/>
      <div className="App">
        <Switch>
        <Route exact path="/">
            <LogIn user={user}onLogin={setUser}/>
          </Route>  
          <Route exact path="/SignUp">
            <SignUp/>
          </Route>
          <Route exact path="/ItemList">
            <ItemList items={items}/>
          </Route>
          <Route exact path="/SubmitItem">
            <SubmitItem/>
          </Route>   
          <Route exact path="/UserItemList">
            {user != null ? <UserItemList user={user} userItems={userItems}/> : <LogIn onLogin={setUser}/>}
          </Route> 
          <Route exact path="/SubmitUserItem">
            {user != null ? <SubmitUserItem user={user} items={items}/> : <LogIn onLogin={setUser}/>}
          </Route>         
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
