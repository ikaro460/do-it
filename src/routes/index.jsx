import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
};
