import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Login from './pages/Login';
import MainMenu from './pages/MainMenu';

export default function App() {
  return (
    <>
      {/* Временное меню для теста навигации */}
      <nav style={{ padding: 12 }}>
        <NavLink to="/login" style={{ marginRight: 8 }}>Login</NavLink>
        <NavLink to="/main">Main</NavLink>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainMenu />} />
      </Routes>
    </>
  );
}
