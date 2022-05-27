import React from "react";

import {  Router } from 'react-router-dom';
import Nav from "./Nav";

function App({ history }) {
  return (
    <Router history={history}>
      <Nav />
    </Router>
  );
}

export default App;
