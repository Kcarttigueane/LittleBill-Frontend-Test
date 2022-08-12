import "@fontsource/permanent-marker";

// ! REACT HOOKS :

import { useState } from "react";

// ! REACT ROUTER :

import { BrowserRouter, Routes, Route } from "react-router-dom";

// ! IMPORT PAGES COMPONENTS :

import Dashboard from "./pages/Dashboard";
import SeeDetails from "./pages/SeeDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  const [UserInput, setUserInput] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard UserInput={UserInput} setUserInput={setUserInput} />
          }
        />
        <Route
          path="/:HeroId"
          element={
            <SeeDetails UserInput={UserInput} setUserInput={setUserInput} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
