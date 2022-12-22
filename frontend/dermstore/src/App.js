import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AppContextProvider from './Components/Context/AppContex';
import AllRoutes from './Components/Routes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import  {Footer}  from './pages/Footer/Footer';

function App() {
  return (
    <div id="app">
      <AppContextProvider>
        <Navbar></Navbar>
        <AllRoutes></AllRoutes>
       <Footer></Footer>
      </AppContextProvider>
    </div>
  );
}

export default App;
