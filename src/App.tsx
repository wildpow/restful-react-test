import React from "react";
import { useRandomGif } from "./api";
import "./App.css";

function App() {
  const { error, loading, data: gifRes } = useRandomGif({});
  return (
    <div className="App">
      <h1>Restful-React Giphy Test!</h1>
      {error && <h1>{error.message}</h1>}
      {loading && <h1>Loading....</h1>} :
      {gifRes && (
        <img alt="Giphy Giphy" src={gifRes.data?.images?.original?.url} />
      )}
    </div>
  );
}

export default App;
