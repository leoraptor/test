import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./componets/Content";
import Login from "./componets/Login";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
