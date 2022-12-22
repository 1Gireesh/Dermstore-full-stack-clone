import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { Cart } from "../pages/cart_section/Cart";
import HomePage from "../pages/HomePage";
import Preview from "../pages/Preview";
import Products from "../pages/product/Products";

function AllRoutes() {
  return (
    <div
    // style={{
    //   marginTop: "169px",
    // }}
    >
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/products" element={<Products></Products>} />
        <Route path="/preview/:id" element={<Preview></Preview>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
