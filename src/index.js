import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import httpMiddleware from "./middleware/httpMiddleware";
import App from "./components/app";
import reducers from "./store/reducers";

import { BrowserRouter as Router, Route } from "react-router-dom";

const createStoreWithMiddleware = applyMiddleware(httpMiddleware)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
