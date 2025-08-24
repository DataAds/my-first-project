import { Button } from "@/components/ui/Button";

export default function Playground() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Playground</h1>
      <Button onClick={() => alert("Работает!")}>Нажми меня</Button>
    </div>
  );
}
