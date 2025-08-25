import React from "react";
import { Button } from "../../components/ui/Button";

export default function Playground() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Playground</h1>
      <p className="text-gray-600">Тестовая страница для проверки UI</p>

      <Button onClick={() => alert("Кнопка работает!")}>
        Нажми меня
      </Button>
    </div>
  );
}
