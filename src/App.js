import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import AddTour from "./pages/AddTour/AddTour";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
            <Route path="singleTour/:id" element={<PrivateRoute>
              <OrderDetails />
            </PrivateRoute>} />
          <Route path="login" element={<Login/>} />
          <Route path="addTour" element={<AddTour/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
