import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css;"
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/navbar";
import Wrapper from "./components/Wrapper/wrapper";
import NavTabs from "./components/NavTabs/navtabs";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Header />
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
