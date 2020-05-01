import React from "react";
import { useGet } from "restful-react";
import "./App.css";

function App() {
  const { data: randomDogImage, loading, refetch } = useGet({
    path: "breeds/image/random",
    lazy: true,
  });
  return (
    <div className="App">
      {!randomDogImage && loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <div>
            <h1>Restful-react Test dog</h1>
            <button onClick={() => refetch()}>Get a test dog</button>
          </div>
          <div>
            {randomDogImage && (
              <img
                alt="Here's a good boye!"
                src={randomDogImage && randomDogImage.message}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
