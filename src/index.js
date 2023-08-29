import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/vendor/font-awesome/css/brands.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import { Admin } from "views/admin/Admin";
import { Dashboard } from "views/admin/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/admin" exact element={<Admin />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </HashRouter>
);
