<<<<<<< HEAD
import { Footer } from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { Cart } from "./pages/cart_section/Cart";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
=======
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AppContextProvider from './allApi/AppContex';
>>>>>>> b33d04353a82822acf45b83055604c218617d824

function App() {


  return (
<<<<<<< HEAD
    <div id="app" >
      <ChakraProvider>
        <Cart />
      </ChakraProvider>
      <Navbar />
      <AllRoutes />
      <Footer />
=======
    <div className="App">
          <AppContextProvider>
<HomePage />
</AppContextProvider>
      
>>>>>>> b33d04353a82822acf45b83055604c218617d824
    </div>
  );
}

export default App;
