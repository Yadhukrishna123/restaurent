import About from "./components/About";
import Addrestaurent from "./components/Addrestaurent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import RestaurentDetails from "./components/RestaurentDetails";
import { BrowserRouter as Router,Routes,Route,  } from "react-router-dom";
import Users from "./components/Users";
import ProtectedRoutes from "./utilis/ProtectedRoutes";
import { useSelector } from "react-redux";



function App() { 
  const isAuthenticated =useSelector((state)=>state.user.isAuthenticated);
  
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/About" element={<About/>}></Route>
        <Route  path="/Contact" element={<Contact/>}></Route>
        <Route  path="/details/:id" element={<RestaurentDetails/>}></Route>
        <Route  path="/register" element={<Register/>}></Route>
        <Route  path="/login" element={<Login/>}></Route>
        <Route  path="/users" element={<Users/>}></Route>
        <Route  path="/add" element={<ProtectedRoutes isAuthenticated={isAuthenticated }><Addrestaurent/></ProtectedRoutes>}></Route>
        
        
        
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
