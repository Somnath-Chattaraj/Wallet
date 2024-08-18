import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App