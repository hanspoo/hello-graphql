import "./App.css";

import React from "react";

import Hello from "./Hello";
import MyApolloProvider from "./MyApolloProvider";

function App() {
  return (
    <MyApolloProvider>
      <div className="App">
        <header className="App-header">
          <Hello />
        </header>
      </div>
    </MyApolloProvider>
  );
}

export default App;
