import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
  
} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';

// import react and use state
// create usestate which is a bollean to be used in home and profile page.




function App() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(false);

  

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return  (
    <Router>
      <Switch>
  
        <Route path ="/login">
    
          <Login
           username={username}
           email={email}
           password={password}
           user={user}
           setUsername={setUsername}
           setEmail={setEmail}
           setPassword={setPassword}
           setUser={setUser}
          />
        </Route>
        <Route path ="/register">
          <Register/>
        </Route>
        <Route path ="/">
          <Home 
            user={user}
            refresh={refresh}
            setRefresh={setRefresh}
            />
        </Route>
        <Route path ="/profile/:username">
          <Profile/>
        </Route>
      </Switch>
    {!user ? <Redirect to = "/login"/>: <Redirect to="/"/>}
    </Router>
  )
}

export default App;
