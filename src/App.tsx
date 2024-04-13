import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Verification from "./components/pages/login/Verification";
import Smartphones from "./components/pages/categories/Smartphones/Smartphones";
import SmartphonesInfo from "./components/pages/categories/Smartphones/SmartphonesInfo";
import Laptops from "./components/pages/categories/Laptops/Laptops";
import Shopping from "./components/pages/shopping";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/home";

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/smartphones" element={<Smartphones />} />
            <Route path="/smartphonesinfo" element={<SmartphonesInfo />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/shopping" element={<Shopping />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
