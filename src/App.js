// Vendors
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Navbar from "./components/shared/Navbar";
import Profile from "./components/profile/Profile";
import ProfileUpdate from "./components/profile/ProfileUpdate";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
          {/* <Route path="/profile" component={Profile} />
          <Route path="/update" component={ProfileUpdate} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
