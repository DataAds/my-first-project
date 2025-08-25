import React from "react";
import { Button } from "../../components/ui/Button";

export default function Playground() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Playground</h1>

      <p className="mb-4 text-gray-600">
        Здесь можно протестировать компоненты.
      </p>

      <Button onClick={() => alert("Кнопка нажата!")}>
        Нажми меня
      </Button>
    </div>
  );
}
