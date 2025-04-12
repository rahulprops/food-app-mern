import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/login"
import ResetPassword from "./auth/ResetPassword";
import Signup from "./auth/Signup";
import VerifyEmail from "./auth/VerifyEmail";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Hero from "./components/ui/Hero";


function App() {
  

  return (
    <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={< ResetPassword/>} />
      <Route path="/verify-email" element={< VerifyEmail/>} />
     

      {/* Protected Routes - wrapped inside MainLayout */}
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<Hero/>} />
        {/* You can nest more protected routes here */}
      </Route>
    </Routes>
  </Router>
  )
}

export default App
