import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Componentdidmount } from "./Componentdidmount";
import { DepArray } from "./DepArray";
import { Cleanup } from "./Cleanup";
import { Fetch } from "./Fetch";
import { RapidApi } from "./RapidApi";
import { UseEvenListener } from "./useEventListener";

function App() {
  return (
    <div className="App">
      <h1>useEffect</h1>
      <span>
        <p>see console : )</p>
      </span>
      <UseEvenListener />
      <Componentdidmount />
      <DepArray />
      <Cleanup />
      <Fetch />
      {/* <RapidApi /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
