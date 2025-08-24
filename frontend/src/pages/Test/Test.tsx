import { Button } from "@/components/ui/Button";

export default function Test() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Тестовая страница</h1>
      <Button onClick={() => alert("Кнопка работает!")}>
        Нажми меня
      </Button>
    </div>
  );
}
