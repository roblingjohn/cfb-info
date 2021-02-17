import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useParams } from "react-router";
import Home from "./containers/Home";
import ConferencePage from "./containers/ConferencePage";
import TeamPage from "./containers/TeamPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/conference/:conference" component={ConferencePage} />
          <Route path="/team/:teamName" component={TeamPage} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
