import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/index"
import Nav from "./components/Nav/index.js"
import Footer from "./components/Footer/index.js"
import Contact from "./pages/Contact/index.js"
import Portfolio from "./pages/Portfolio/index.js"


function App() {
  return(
    <Router>
      <div>
        <Nav />
        <Route  exact path="/" component={Home} />
        <Route  exact path="/contact" component={Contact} />
        <Route  exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
