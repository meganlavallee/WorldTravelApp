import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SavedList from "./pages/SavedList";
import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signup" component={SignUp}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/savedlist" component={SavedList}/> 
    </Switch>
    </Router>
  );
}

export default App;
