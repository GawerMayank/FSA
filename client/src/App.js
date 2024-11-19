import Footer from "./components/footer";
import HomePage from "./components/homePage";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import Users from "./components/users";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    // eslint-disable-next-line
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
