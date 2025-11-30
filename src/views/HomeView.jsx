import React from 'react';
import { Link } from 'react-router-dom';

const ActionCard = ({ title, description, icon, buttonText, buttonColor, linkTo, accentColor }) => (
    <div className="card" style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '2rem',
        borderTop: `4px solid ${accentColor}`,
        position: 'relative',
        overflow: 'hidden'
    }}>
        <div style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            backgroundColor: '#F3F4F6',
            width: '80px',
            height: '80px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 700 }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            {description}
        </p>
        <Link
            to={linkTo}
            style={{
                marginTop: 'auto',
                width: '100%',
                textAlign: 'center',
                backgroundColor: buttonColor,
                color: 'white',
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 600,
                boxShadow: 'var(--shadow-md)'
            }}
        >
            {buttonText}
        </Link>
    </div>
);

const HomeView = () => {
    return (
        <div>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
                borderRadius: 'var(--radius-xl)',
                padding: '3rem',
                color: 'white',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <p style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Panel de Control</p>
                    <h1 style={{ fontSize: '2.5rem', margin: 0, fontWeight: 800 }}>Bienvenido de nuevo, Andrés.</h1>
                </div>

                {/* Decorative circle */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    pointerEvents: 'none'
                }} />
            </div>

            {/* Action Cards */}
            <div style={{ display: 'flex', gap: '2rem', flexDirection: 'row', flexWrap: 'wrap' }}>
                <ActionCard
                    title="Gestión de Inventario"
                    description="Gestión de inventario consolidada. Controla tu stock, precios y categorías desde un solo lugar."
                    icon="📋"
                    buttonText="Acceder al Inventario"
                    buttonColor="#2563EB"
                    accentColor="#2563EB"
                    linkTo="/inventario"
                />

                <ActionCard
                    title="Punto de Venta (POS)"
                    description="Punto de Venta (POS) optimizado. Realiza ventas rápidas y gestiona pedidos en tiempo real."
                    icon="💰"
                    buttonText="Iniciar Nueva Venta"
                    buttonColor="#D97706"
                    accentColor="#D97706"
                    linkTo="/ventas"
                />
            </div>
        </div>
    );
};

export default HomeView;
