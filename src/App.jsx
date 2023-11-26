import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import HomePage from "./views/HomePage.jsx";
import Contacto from "./views/Contacto.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
