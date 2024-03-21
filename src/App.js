import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Map from "./components/Map";
import Navigation from "./components/Navigation";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/" component={AboutUs} />
      </Switch>
    </>
  );
}

export default App;
