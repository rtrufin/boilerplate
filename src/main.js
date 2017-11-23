import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import routes from "./routes";
import './styles/styles.css'


import App from "./components/App.jsx";

module.hot.accept()

const render = (appComponent) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("app")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const newApp = require('./components/App').default
    render(newApp);
  });
}
