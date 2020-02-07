import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./layout/Layout";
import News from "./components/news/News";
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Route exact path="/" component={News} />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
