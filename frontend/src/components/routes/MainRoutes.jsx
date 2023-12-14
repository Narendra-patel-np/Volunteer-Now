import { Routes, Route } from "react-router-dom";

import OportunitiesPage from "../pages/OportunitiesPage";
import SingleOpPage from "../pages/SingleOpPage";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Oportunities" element={<OportunitiesPage />} />
      <Route path="/Oportunities/:id" element={<SingleOpPage />} />
    </Routes>
  );
};
export default MainRoutes;
