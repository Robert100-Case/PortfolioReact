import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Port1 from "./pages/Port1";
import Port2 from "./pages/Port2";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Port1} />
          <Route exact path="/port2" component={Port2} />
          <Route exact path="/port1" component={Port1} />
           
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
