import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ErrorBoundry from "./components/error-boundry/error-boundry.js";
import App from "./components/app/app.js";
import store from "./store.js";


ReactDOM.render(
     <Provider store={store}>
          <ErrorBoundry>
               <App />
          </ErrorBoundry>
     </Provider>, 
     document.querySelector("#root")
);