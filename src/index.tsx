import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "./containers/Dashboard";
import DetailPage from "./containers/DetailPage";
import EditPage from "./containers/EditPage";

import configureStore from "./config/storeConfig";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles/styles.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/:slug/view" element={<DetailPage/>} />
        <Route path="/:slug/edit" element={<EditPage/>} />
        <Route path="/" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
