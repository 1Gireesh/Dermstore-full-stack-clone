import { Route, Routes } from "react-router-dom";
import Register from "../Components/Register";

function AllRoutes() {
  return (
    <div
    // style={{
    //   marginTop: "169px",
    // }}
    >
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<h1>LOGIN</h1>} />
        <Route path="/cart" element={<h1>CART</h1>} />
        <Route path="/brands" element={<h1>BRANDS</h1>} />
        <Route path="/holiday+by" element={<h1>HOLIDAY BY</h1>} />
        <Route path="/browse+by" element={<h1>BROWSE BY</h1>} />
        <Route path="/bestsellers" element={<h1>BESTSELLERS</h1>} />
        <Route path="/skin+care" element={<h1>SKIN CARE</h1>} />
        <Route path="/makeup" element={<h1>MAKEUP</h1>} />
        <Route path="/hair+care" element={<h1>HAIR CARE</h1>} />
        <Route path="/bath+and+body" element={<h1>BATH AND BODY</h1>} />
        <Route path="/fragrance+shop" element={<h1>FRAGRANCE SHOP</h1>} />
        <Route path="/tools+and+devices" element={<h1>TOOLS AND DEVICES</h1>} />
        <Route path="/gifts+and+sets" element={<h1>GIFTS AND SETS</h1>} />
        <Route path="/beauty+fix" element={<h1>BEAUTY-FIX</h1>} />
        <Route path="/offers" element={<h1>OFFERS</h1>} />
        <Route path="/new" element={<h1>NEW</h1>} />
        <Route path="/skin+101" element={<h1>SKIN 101</h1>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
