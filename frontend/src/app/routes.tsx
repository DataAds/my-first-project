
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ResetPassword from "../pages/Auth/ResetPassword";
import WorkspaceSelect from "../pages/WorkspaceSelect/WorkspaceSelect";
import Dashboard from "../pages/Dashboard/Dashboard";
import Campaigns from "../pages/Campaigns/Campaigns";
import Integrations from "../pages/Integrations/Integrations";
import Settings from "../pages/Settings/Settings";
import Users from "../pages/Users/Users";
import Billing from "../pages/Billing/Billing";
import Playground from "../pages/Playground/Playground";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/reset-password", element: <ResetPassword /> },
      { path: "/workspaces", element: <WorkspaceSelect /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/campaigns", element: <Campaigns /> },
      { path: "/integrations", element: <Integrations /> },
      { path: "/settings", element: <Settings /> },
      { path: "/users", element: <Users /> },
      { path: "/billing", element: <Billing /> },
      { path: "/playground", element: <Playground /> },
    ],
  },
]);
