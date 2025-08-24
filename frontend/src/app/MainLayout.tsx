import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <nav style={{padding:"8px", borderBottom:"1px solid #ddd"}}>
        <Link to="/login" style={{marginRight:12}}>Login</Link>
        <Link to="/playground">Playground</Link>
      </nav>
      <main style={{padding:"24px"}}>
        <Outlet />
      </main>
    </div>
  );
}
