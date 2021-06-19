import React, { Fragment } from "react";

// components
import Routes from "./pages/routes";
import Social from "./components/contact/social";
import Email from "./components/contact/email";
import { LineL, LineR } from "./components/contact/line";

function App() {
  return (
    <div className="bg-basic-gray w-screen">
      <Fragment>
        <Routes />
        <Social />
        <Email />
        <LineL />
        <LineR />
      </Fragment>
    </div>
  );
}

export default App;
