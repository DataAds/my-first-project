import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">DataAds</header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="bg-gray-200 p-4 text-center">© 2025 DataAds</footer>
    </div>
  );
}
