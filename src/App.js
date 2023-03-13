// Vendors
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
