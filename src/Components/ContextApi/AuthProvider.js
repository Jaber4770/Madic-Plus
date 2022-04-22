import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

// Context api created

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={useFirebase()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;