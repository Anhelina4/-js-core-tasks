import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App2";
import App2 from "./App2";
import BuildProvider from "./App2"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <App2 />
  </StrictMode>
  ,
  rootElement
);
