import React, { Component } from "react";
import { CreateAuctionForm } from "./CreateAuctionForm";

import "./App.css";
import { Auctions } from "./Auctions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateAuctionForm />
        <Auctions />
      </div>
    );
  }
}

export default App;
