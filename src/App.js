import React from "react";
import {Header} from './Components/header'
import { Transaction } from "./Components/transaction";
import {History}  from "./Components/history";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="cotainer">
        <Transaction />
        <History />
      </div>
    </div>
  );
}

export default App;
