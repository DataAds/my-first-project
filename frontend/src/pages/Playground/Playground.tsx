import React from "react";
import { Button } from "../../components/ui/Button";

export default function Playground() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
        Playground
      </h1>

      <p style={{ marginBottom: 16, color: "#555" }}>
        Здесь можно протестировать компоненты.
      </p>

      <Button onClick={() => alert("Кнопка нажата!")}>
        Нажми меня
      </Button>
    </div>
  );
}
