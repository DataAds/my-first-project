#!/bin/bash
set -e

echo "📁 Создаём папки..."
mkdir -p public \
src/app \
src/pages/Auth \
src/pages/WorkspaceSelect \
src/pages/Dashboard/components \
src/pages/Campaigns/components \
src/pages/Integrations \
src/pages/Settings \
src/pages/Users \
src/pages/Billing \
src/components/layout \
src/components/ui \
src/components/filters \
src/components/charts \
src/features/kpis \
src/features/campaigns \
src/features/connections \
src/features/users \
src/services/api \
src/services/mappers \
src/store \
src/hooks \
src/types \
src/utils \
src/styles

echo "📄 Создаём файлы..."
touch public/favicon.ico
touch src/app/App.tsx src/app/routes.tsx src/app/providers.tsx
touch src/pages/Auth/Login.tsx src/pages/Auth/Register.tsx src/pages/Auth/ResetPassword.tsx
touch src/pages/WorkspaceSelect/WorkspaceSelect.tsx
touch src/pages/Dashboard/Dashboard.tsx src/pages/Dashboard/components/KpiCards.tsx src/pages/Dashboard/components/SpendLeadsChart.tsx src/pages/Dashboard/components/SourcesTable.tsx
touch src/pages/Campaigns/Campaigns.tsx src/pages/Campaigns/components/CampaignsTable.tsx src/pages/Campaigns/components/CampaignDetails.tsx
touch src/pages/Integrations/Integrations.tsx
touch src/pages/Settings/Settings.tsx
touch src/pages/Users/Users.tsx
touch src/pages/Billing/Billing.tsx
touch src/components/layout/Sidebar.tsx src/components/layout/Header.tsx src/components/layout/Page.tsx
touch src/components/filters/DateRangePicker.tsx src/components/filters/SourceAccountFilter.tsx
touch src/components/charts/AxisLegend.tsx
touch src/services/api/http.ts src/services/api/auth.ts src/services/api/workspace.ts src/services/api/connections.ts src/services/api/kpi.ts src/services/api/refresh.ts
touch src/store/filters.store.ts src/store/session.store.ts
touch src/index.css src/main.tsx

echo "📝 Заполняем заглушки страниц..."
for file in src/pages/*/*.tsx; do
  name=$(basename "$file" .tsx)
  echo "export default function $name() { return <div>$name Page</div>; }" > "$file"
done

echo "📝 Создаём App.tsx и routes.tsx..."
cat > src/app/App.tsx <<'EOF'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}
EOF

cat > src/app/routes.tsx <<'EOF'
import { createBrowserRouter } from "react-router-dom";

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

export const router = createBrowserRouter([
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
]);
EOF

cat > src/main.tsx <<'EOF'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

echo "✅ Структура проекта создана!"
