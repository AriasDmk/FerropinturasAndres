import React, { useContext } from 'react';
import { InventarioContext } from '../context/InventarioContext';

const InventarioView = () => {
    const { productos } = useContext(InventarioContext);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Inventario</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Gestiona tus productos y existencias.</p>
                </div>
                <button className="btn btn-primary">
                    <span style={{ marginRight: '0.5rem' }}>➕</span> Nuevo Producto
                </button>
            </div>

            <div className="card">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Producto</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>SKU</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Categoría</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Stock</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Precio</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Estado</th>
                                <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.length === 0 ? (
                                <tr>
                                    <td colSpan="7" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                                        No hay productos registrados. ¡Comienza agregando uno!
                                    </td>
                                </tr>
                            ) : (
                                productos.map((prod) => (
                                    <tr key={prod.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>{prod.nombre}</td>
                                        <td style={{ padding: '1rem', fontFamily: 'monospace' }}>{prod.sku}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{ backgroundColor: '#F1F5F9', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.875rem' }}>
                                                {prod.categoria}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>{prod.stock}</td>
                                        <td style={{ padding: '1rem', fontWeight: 600 }}>${prod.precio}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                backgroundColor: prod.stock > 10 ? '#DCFCE7' : '#FEE2E2',
                                                color: prod.stock > 10 ? '#166534' : '#991B1B',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                fontSize: '0.875rem',
                                                fontWeight: 500
                                            }}>
                                                {prod.stock > 10 ? 'En Stock' : 'Bajo Stock'}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <button style={{ background: 'none', color: 'var(--text-secondary)', marginRight: '0.5rem' }}>✏️</button>
                                            <button style={{ background: 'none', color: 'var(--danger-color)' }}>🗑️</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default InventarioView;
