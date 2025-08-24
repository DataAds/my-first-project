import { Button } from "@/components/ui/Button";
import Page from "@/components/layout/Page";

export default function Test() {
  return (
    <Page title="Тестовая страница">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Привет из DataAds 🎉</h1>
        <Button onClick={() => alert("Кнопка работает!")}>
          Нажми меня
        </Button>
      </div>
    </Page>
  );
}
