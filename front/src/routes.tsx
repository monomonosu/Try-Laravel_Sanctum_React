import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./Dashboard";
import LoginPage from "./Login";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DashboardPage />,
  },
]);
