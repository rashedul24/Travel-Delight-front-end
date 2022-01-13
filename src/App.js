import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import TourDetails from "./pages/TourDetails/TourDetails";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="singleTour/:id" element={<TourDetails/>} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
