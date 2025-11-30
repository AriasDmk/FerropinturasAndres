import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { InventarioProvider } from './context/InventarioContext';
import HomeView from './views/HomeView';
import InventarioView from './views/InventarioView';
import VentasView from './views/VentasView';
import './App.css';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      style={{
        color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
        fontWeight: isActive ? 600 : 500,
        marginRight: '2rem',
        fontSize: '0.95rem',
        position: 'relative'
      }}
    >
      {children}
    </Link>
  );
};

function AppContent() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F3F4F6' }}>
      {/* Top Navigation Bar */}
      <nav style={{
        backgroundColor: 'var(--surface-color)',
        padding: '0.75rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'var(--shadow-sm)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🛠️</span>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-color)' }}>Ferropinturas ERP</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/inventario">Inventario General</NavLink>

          <Link
            to="/ventas"
            style={{
              backgroundColor: '#1E293B',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            Ventas 💰
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/inventario" element={<InventarioView />} />
          <Route path="/ventas" element={<VentasView />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <InventarioProvider>
      <Router>
        <AppContent />
      </Router>
    </InventarioProvider>
  );
}

export default App;