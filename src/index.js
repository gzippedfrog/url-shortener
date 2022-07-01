import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store } from "./store";
import { Provider as StoreProvider } from "react-redux";

const client = new ApolloClient({
  uri: "http://test-task.profilancegroup-tech.com/graphql",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <StoreProvider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </StoreProvider>
  </ApolloProvider>
);
