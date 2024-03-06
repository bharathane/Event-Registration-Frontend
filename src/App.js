import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import RegistrationItems from "./components/RegistrationItems";

import "./App.css";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegistrationForm />} />
        <Route exact path="/registrations" element={<RegistrationItems />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
