import React, { Fragment } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/nav";
import Index from "./pages/index";
import Routes from "./pages/routes";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-coolGray-800">
      <Router>
        <Fragment>
          <Nav />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route component={Routes} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
