import "./App.css";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Registered/Register";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetails from "./Pages/Services/ServiceDetails/ServiceDetails";
import Header from "./Shared/Header/Header";
import RequireAuth from "./RequireAuth/RequireAuth";
import { Toaster } from "react-hot-toast";
export const ServiceContext = createContext();

function App() {
  const [services, setServices] = useState([]);
  return (
    <ServiceContext.Provider value={[services, setServices]}>
      <Header />
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/service/:id"
          element={
            <RequireAuth>
              <ServiceDetails />
            </RequireAuth>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/registered" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ServiceContext.Provider>
  );
}

export default App;
