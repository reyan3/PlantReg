import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DiseaseLib from "./components/DiseaseLib";
import Support from "./components/Support";


// Main App Component
const App = () => {
return (
  <>
  <Router>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<DiseaseLib/>} path="/disease"/>
      <Route element={<Support/>} path="/support"/>
    </Routes>
    <Footer/>
  </Router>
  </>
)
};

export default App;
