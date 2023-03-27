import React from "react";

import "./app.scss";
import Navbar from "./componets/navbar/Navbar";
import Home from "./pages/home/Home";
import BuyCard from "./pages/shop/BuyCard";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <main>
        <Home />
        <BuyCard/>
      </main>
    </div>
  );
}

export default App;
