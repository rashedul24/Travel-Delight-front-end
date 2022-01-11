import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Routes>
          <Route index element="" />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
