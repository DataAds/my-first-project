import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { Button } from "@/components/ui/Button";

export default function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">DataAds App</h1>
      <Button onClick={() => alert("Кнопка работает!")}>
        Нажми меня
      </Button>

      {/* Оставляем твой роутер */}
      <RouterProvider router={router} />
    </div>
  );
}

