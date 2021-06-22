import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Class from "./view/class";
import Posts from "./view/posts";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Class />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
