import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import History from "./pages/History/History";
import Distribution from "./pages/Distribution/Distribution";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/history" element={<History />} />
          <Route path="/distribution" element={<Distribution />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

