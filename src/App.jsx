import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./features/admin/Admin";
import AddProduct from "./features/admin/AddProduct";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} position="top-center" />

      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="login" />} />

          <Route path="home" element={<Home />} />

          <Route path="admin" element={<Admin />} />

          <Route path="admin/add-product" element={<AddProduct />} />

          <Route path="signup" element={<Signup />} />

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
