import React, { createContext, useState } from 'react';

export const InventarioContext = createContext();

export const InventarioProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);

    return (
        <InventarioContext.Provider value={{ productos, setProductos }}>
            {children}
        </InventarioContext.Provider>
    );
};
