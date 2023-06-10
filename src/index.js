import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import Detailed from "./Detailed";
import InfoScreen from "./InfoScreen";
import BasicScreen from "./BasicScreen";
import BodyContentList from "./modules/BodyContentList";
import BodyContentDetail from "./modules/BodyContentDetail";

// Below is Original
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// Above is Original

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        {/* <Route path="basics" element={<BasicScreen />} />
        <Route path="info" element={<InfoScreen />} /> */}

        <Route exact path=":bodyDetailList" element={<BodyContentList />} />

        {/* <Route path=":bodyDetailList/:bodyDetailItem" element={<BodyContentDetail />} /> */}
        <Route
          exact
          path="/headneck/:bodyDetailItem"
          element={<BodyContentDetail />}
        />
        <Route
          exact
          path="/torso/:bodyDetailItem"
          element={<BodyContentDetail />}
        />
        <Route
          exact
          path="/upperextremities/:bodyDetailItem"
          element={<BodyContentDetail />}
        />
        <Route
          exact
          path="/lowerextremities/:bodyDetailItem"
          element={<BodyContentDetail />}
        />
        <Route
          exact
          path="/othermsk/:bodyDetailItem"
          element={<BodyContentDetail />}
        />
      </Route>

      {/* <Route path="/basics" element={<BasicScreen />} />
      <Route path="/info" element={<InfoScreen />} /> */}
      {/* <Route path="/detailed" element={<Detailed />} /> */}
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
