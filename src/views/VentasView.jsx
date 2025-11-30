import React, { useState } from 'react';

const VentasView = () => {
    const [cart, setCart] = useState([]);

    // Mock products for sales demo
    const products = [
        { id: 1, name: 'Pintura Blanca 5G', price: 45.00, category: 'Pinturas' },
        { id: 2, name: 'Brocha 2"', price: 3.50, category: 'Herramientas' },
        { id: 3, name: 'Rodillo Profesional', price: 8.25, category: 'Herramientas' },
        { id: 4, name: 'Thinner 1L', price: 4.00, category: 'Solventes' },
        { id: 5, name: 'Lija #100', price: 0.50, category: 'Abrasivos' },
        { id: 6, name: 'Cinta Masking', price: 2.00, category: 'Adhesivos' },
    ];

    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem', height: 'calc(100vh - 140px)' }}>
            {/* Product Selection Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ margin: 0 }}>Nueva Venta</h2>
                    <input
                        type="text"
                        placeholder="🔍 Buscar productos..."
                        style={{
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-color)',
                            width: '300px',
                            outline: 'none'
                        }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', overflowY: 'auto', paddingRight: '0.5rem' }}>
                    {products.map(product => (
                        <div
                            key={product.id}
                            className="card"
                            style={{
                                cursor: 'pointer',
                                transition: 'transform 0.1s',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                minHeight: '120px'
                            }}
                            onClick={() => addToCart(product)}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <div>
                                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{product.name}</h3>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', backgroundColor: '#F1F5F9', padding: '0.1rem 0.5rem', borderRadius: '4px' }}>
                                    {product.category}
                                </span>
                            </div>
                            <div style={{ marginTop: '1rem', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary-color)' }}>
                                ${product.price.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart / Checkout Area */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <h3 style={{ margin: 0 }}>Carrito de Compra</h3>
                    <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                        {cart.length} items agregados
                    </p>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                    {cart.length === 0 ? (
                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', flexDirection: 'column' }}>
                            <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛒</span>
                            <p>Carrito vacío</p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {cart.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontWeight: 500 }}>{item.name}</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                            {item.quantity} x ${item.price.toFixed(2)}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ fontWeight: 600 }}>${(item.price * item.quantity).toFixed(2)}</span>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }}
                                            style={{ color: 'var(--danger-color)', background: 'none', padding: '0.25rem' }}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', borderTop: '1px solid var(--border-color)', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        <span>Total</span>
                        <span style={{ fontWeight: 700 }}>${total.toFixed(2)}</span>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                        Completar Venta
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VentasView;