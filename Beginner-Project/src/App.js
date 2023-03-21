import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './Containers/Header';
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetails />} />
          <Route>404 Error Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
