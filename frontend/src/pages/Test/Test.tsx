import { Button } from "@/components/ui/Button";
import Page from "@/components/layout/Page";

export default function Test() {
  return (
    <Page title="Тестовая страница">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Привет из DataAds 🎉</h2>
        <Button onClick={() => alert("Кнопка работает!")}>
          Нажми меня
        </Button>
      </div>
    </Page>
  );
}

