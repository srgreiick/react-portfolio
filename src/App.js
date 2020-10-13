import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/index"
import Dir from "./pages/Directory/index"
import Nav from "./components/Nav/index.js"

function App() {
  return(
    <Router>
      <div>
        <Nav />
        <Route  exact path="/" component={Home} />
        <Route  exact path="/dir" component={Dir} />
      </div>
    </Router>
  );
}

export default App;
