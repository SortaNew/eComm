import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./SignUp"
import ItemList from "./ItemList"
import UserItemList from "./UserItemList"
import LogIn from "./LogIn"
import SubmitItem from "./SubmitItem"
import SubmitUserItem from "./SubmitUserItem"

function App() {
  const [items, setItems] = useState([]);
  const [userItems, setUserItems] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
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
      <div className="App">
        <Switch>
          <Route exact path="/ItemList">
            <ItemList items={items}/>
          </Route>
          <Route exact path="/UserItemList">
            <UserItemList userItems={userItems}/>
          </Route> 
          <Route exact path="/">
            <LogIn/>
          </Route>    
          <Route exact path="/SignUp">
            <SignUp/>
          </Route>
          <Route exact path="/SubmitItem">
            <SubmitItem/>
          </Route>   
          <Route exact path="/SubmitUserItem">
            <SubmitUserItem/>
          </Route>         
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
