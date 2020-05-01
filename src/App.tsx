import React from "react";
import { useTrendingGifs, useTrendingStickers } from "./api";
import "./App.css";

function App() {
  // Also try useTrendingGifs
  const { error, loading, data: gifRes } = useTrendingGifs({});
  return (
    <div className="App">
      <h1>Restful-React Giphy Test!</h1>
      {error && <h1>{error.message}</h1>}
      {loading && <h1>Loading....</h1>} :
      {gifRes &&
        gifRes.data?.map((gif) => (
          <img key={gif.id} alt={gif.slug} src={gif.images?.original?.url} />
        ))}
    </div>
  );
}

export default App;
