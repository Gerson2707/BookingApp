import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import HotelsIdPages from "./pages/HotelsIdPages.jsx";
import RegisterPages from "./pages/RegisterPages.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHotelsThunk } from "./store/states/hotels.slice.js";
import PrincipalHeader from "./components/shared/PrincipalHeader.jsx";
import ReservationPage from "./pages/ReservationPage.jsx";
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const url = "https://hotels-api.academlo.tech/hotels";
    dispatch(getHotelsThunk(url));
  }, []);
  
  return (
    <div>
      <PrincipalHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels/:id" element={<HotelsIdPages />} />
        <Route path="/register" element={<RegisterPages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/reservations" element={<ReservationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
