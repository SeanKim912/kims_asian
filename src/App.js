import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Map from "./components/Map";
import Navigation from "./components/Navigation";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/about" component={AboutUs} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/" component={AboutUs} />
      </Routes>
    </>
  );
}

export default App;
