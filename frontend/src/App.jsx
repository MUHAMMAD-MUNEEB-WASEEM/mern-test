import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminHome from "./pages/AdminHome";
import Creator from "./pages/Creator";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/creator-home" element={<Creator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
