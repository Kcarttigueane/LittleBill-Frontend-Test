// ! REACT ROUTER :

import { BrowserRouter, Routes, Route } from "react-router-dom";

// ! IMPORT PAGES COMPONENTS :

import Dashboard from "./pages/Dashboard";
import SeeDetails from "./pages/SeeDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Supes/:HeroId" element={<SeeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
