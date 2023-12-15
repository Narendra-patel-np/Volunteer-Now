import { Routes, Route } from "react-router-dom";

import OportunitiesPage from "../pages/OportunitiesPage";
import SingleOpPage from "../pages/SingleOpPage";
import HomePage from "../pages/HomePage";
import Register from "../pages/register";
import Login from "../pages/login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Oportunities" element={<OportunitiesPage />} />
      <Route path="/Oportunities/:id" element={<SingleOpPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default MainRoutes;
