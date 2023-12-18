import { Routes, Route } from "react-router-dom";

import OportunitiesPage from "../pages/OportunitiesPage";
import SingleOpPage from "../pages/SingleOpPage";
import HomePage from "../pages/HomePage";
import Register from "../pages/register";
import Login from "../pages/login";
import Applied from "../pages/applied";
import PrivateRoute from "./PrivateRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/Oportunities"
        element={
          <PrivateRoute>
            <OportunitiesPage />
          </PrivateRoute>
        }
      />
      <Route path="/Oportunities/:id" element={<SingleOpPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/applied"
        element={
          <PrivateRoute>
            <Applied />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
export default MainRoutes;
