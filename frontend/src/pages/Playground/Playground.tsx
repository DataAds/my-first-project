import { Button } from "@/components/ui/Button";

export default function Playground() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Playground / Тестовая страница</h1>

      <div className="space-x-3">
        <Button onClick={() => alert("Кнопка работает!")}>
          Нажми меня
        </Button>
      </div>
    </div>
  );
}

