export default function Page({ title, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div> {/* 👈 вот это должно быть */}
    </div>
  );
}
