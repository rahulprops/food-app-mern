import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/login"
import ResetPassword from "./auth/ResetPassword";
import Signup from "./auth/Signup";
import MainLayout from "./MainLayout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={< ResetPassword/>} />
     

      {/* Protected Routes - wrapped inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        
        {/* You can nest more protected routes here */}
      </Route>
    </Routes>
  </Router>
  )
}

export default App
