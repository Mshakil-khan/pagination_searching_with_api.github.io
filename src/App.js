import "./App.css";
import { Main } from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DetailCompany } from "./Routing/DetailCompany";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Main} />
        <Route path="/details" exact={true} component={DetailCompany} />
      </Switch>
    </Router>
  );
}

export default App;
