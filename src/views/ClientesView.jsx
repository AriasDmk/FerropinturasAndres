import React, { useState } from 'react';

const ClientesView = () => {
    const [clientes] = useState([
        { id: 1, nombre: 'Juan Pérez', empresa: 'Construcciones SA', email: 'juan@construcciones.com', telefono: '555-0101' },
        { id: 2, nombre: 'María García', empresa: 'Diseños Modernos', email: 'maria@disenos.com', telefono: '555-0102' },
        { id: 3, nombre: 'Carlos López', empresa: 'Particular', email: 'carlos.lopez@email.com', telefono: '555-0103' },
    ]);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Clientes</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Gestiona tu cartera de clientes.</p>
                </div>
                <button className="btn btn-primary">
                    <span style={{ marginRight: '0.5rem' }}>➕</span> Nuevo Cliente
                </button>
            </div>

            <div className="card">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Nombre</th>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Empresa</th>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Email</th>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Teléfono</th>
                            <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '1rem', fontWeight: 500 }}>{cliente.nombre}</td>
                                <td style={{ padding: '1rem' }}>{cliente.empresa}</td>
                                <td style={{ padding: '1rem' }}>{cliente.email}</td>
                                <td style={{ padding: '1rem' }}>{cliente.telefono}</td>
                                <td style={{ padding: '1rem' }}>
                                    <button style={{ background: 'none', color: 'var(--text-secondary)', marginRight: '0.5rem' }}>✏️</button>
                                    <button style={{ background: 'none', color: 'var(--danger-color)' }}>🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientesView;
