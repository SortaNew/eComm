import { NavLink } from "react-router-dom";

function Navbar({ user, onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout(""));
      alert("You have been logged out!")
    }
  
    return (
      <header>
        <NavLink to="/">Log In</NavLink>&nbsp;
        <NavLink to="/SignUp">Sign Up</NavLink>&nbsp;
        <NavLink to="/ItemList">Items</NavLink>&nbsp;
        <NavLink to="/SubmitItem">Submit Items</NavLink>&nbsp;
        <NavLink to="/UserItemList">Your Items</NavLink>&nbsp;
        <NavLink to="/SubmitUserItem">Edit Items</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {user != null ? <a>{user.username}</a> : ""}&nbsp;        
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }

  export default Navbar