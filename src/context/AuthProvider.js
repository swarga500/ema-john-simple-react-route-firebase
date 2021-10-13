import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/usefirebase';



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // const {children} = props;
    const allContexts = useFirebase()
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;