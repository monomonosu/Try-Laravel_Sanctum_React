import { Route, Routes } from "react-router-dom";
import DashboardPage from "./Dashboard";
import LoginPage from "./Login";

const RouterContent = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}

export default RouterContent;