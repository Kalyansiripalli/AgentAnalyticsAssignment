import React, { useState } from 'react';
import AppContext from './AppContext'; // Correct import path

const AppContextProvider = ({ children }) => {
    const [itemsArray, setItemsArray] = useState([]);
    return (
        <AppContext.Provider value={{ itemsArray, setItemsArray }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
