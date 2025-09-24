import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Appbar from "./Components/Appbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Fish_food from "./Pages/Fish_food";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Plants from "./Pages/Plants";
import Fish_medicion from "./Pages/Fish_medicion";
import Fish from "./Pages/Fish";
import ProductDetails from "./Components/ProductDetails";
import OrderForm from "./Components/OrderForm";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer"
import PlantDetails from "./Components/PlantDetails";
import PlantOrder from "./Components/PlantOrder";
import FoodDetails from "./Components/FoodDetails";
import FoodOrder from "./Components/FoodOrder";
import MadiDetails from "./Components/MadiDetails";
import MadiOrder from "./Components/MadiOrder";
import Forget from './Pages/Forget';
import Logout from './Pages/Logout';
import Resetposwerd from "./Pages/Resetposwerd";
import Mainlogin from "./Components/Mainlogin"
import AdminDashboard from "./Components/AdminDashboard";
import AdminLogin from "./Components/AdminLogin";


// Protected Admin Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" />;
};

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  return (
    
      <Router>
        <Appbar />
        <Routes>
          {/* General Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Fish Section */}
          <Route path="Fish" element={<Fish />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Order/:id" element={<OrderForm />} />

          {/* Fish Food Section */}
          <Route path="/fish_food" element={<Fish_food />} />
          <Route path="/product/:id" element={<FoodDetails />} />
          <Route path="/order/:id" element={<FoodOrder />} />

          {/* Plants Section */}
          <Route path="/plants" element={<Plants />} />
          <Route path="/product/:id" element={<PlantDetails />} />
          <Route path="/order/:id" element={<PlantOrder />} />

          {/* Fish Medication Section */}
          <Route path="/Fish_medicion" element={<Fish_medicion />} />
          <Route path="/product/:id" element={<MadiDetails />} />
          <Route path="/order/:id" element={<MadiOrder />} />

          {/* User Authentication */}
          <Route path="/login" element={<Login setIsUserSignedIn={setIsUserSignedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Forget" element={<Forget />} />
          <Route path="/logout" element={<Logout setIsUserSignedIn={setIsUserSignedIn} />} />
          <Route path="/reset-password" element={<Resetposwerd setIsUserSignedIn={setIsUserSignedIn} />} />

          {/* Admin Authentication */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />

          {/* Main Login */}
          <Route path="/mainlogin" element={<Mainlogin setIsUserSignedIn={setIsUserSignedIn} />} />
        </Routes>
        <Footer />
      </Router>
  
  );
}

export default App;
