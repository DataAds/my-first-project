export default function Test() {
  return (
    <div style={{ padding: "40px", background: "#eef" }}>
      <h1>Тестовая страница</h1>
      <button
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          borderRadius: "8px",
        }}
        onClick={() => alert("Кнопка работает!")}
      >
        Нажми меня
      </button>
    </div>
  );
}
