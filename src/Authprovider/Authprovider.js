import React from 'react';
import { createContext } from 'react';


export const AuthContext = createContext()
const Authprovider = ({ children }) => {
    let user = {
        disPlayName: 'rumman'
    }
    let authInfo = {
        user: user
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;