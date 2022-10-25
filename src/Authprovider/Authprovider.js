import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let authInfo = {
        createUser
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