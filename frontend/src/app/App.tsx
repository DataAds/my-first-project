import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export default function App() {
  console.log("✅ App.tsx загружен"); // диагностика

  return (
    <div>
      <h1 className="text-2xl font-bold bg-yellow-200">
        DataAds App (тест деплоя)
      </h1>

      <RouterProvider router={router} />
    </div>
  );
}

