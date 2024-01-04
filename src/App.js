import { Route, Switch } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";

import "./App.css";

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Home />
      <div className="app-body">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
