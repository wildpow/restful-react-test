import React from "react";
import { useGet } from "restful-react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { data: randomDogImage } = useGet({
    path: "breeds/image/random",
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <img
          alt="Here's a good boye!"
          src={randomDogImage && randomDogImage.message}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
