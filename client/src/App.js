import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>World Travel App</h1>
    <Switch>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signup" component={SignUp}/>
    {/* <Route exact path="/" component={Home}/>
    <Route exact path="/" component={SavedList}/> */}
    </Switch>
    </Router>
  );
}

export default App;
