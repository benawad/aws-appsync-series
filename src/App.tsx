import React, { Component } from "react";
import { CreateAuctionForm } from "./CreateAuctionForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateAuctionForm />
      </div>
    );
  }
}

export default App;
