import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    let [courses, setCourses] = useState([])
    let [loading, setLoading] = useState(true)
    console.log(courses);
    useEffect(() => {
        fetch('https://teach-you-com-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    let [users, setUsers] = useState('')
    let [errors, setErrors] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignInuser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updatePersonProfile = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    const googleSignIn = (Googleprovider) => {
        setLoading(true)
        return signInWithPopup(auth, Googleprovider)
    }
    const gitSignIn = (Gitprovider) => {
        setLoading(true)
        return signInWithPopup(auth, Gitprovider)
    }
    useEffect(() => {
        let unsubscrube = onAuthStateChanged(auth, (currentUser) => {
            // currentUser === null || currentUser.emailVerified
            if (currentUser === null || currentUser.emailVerified) {
                console.log(currentUser);
                setUsers(currentUser)
            }

            setLoading(false)
        })
        return () => {
            unsubscrube()
        }
    }, [])

    let authInfo = {
        createUser,
        SignInuser,
        logOut,
        users,
        errors,
        setErrors,
        updatePersonProfile,
        verifyEmail, setUsers,
        googleSignIn, gitSignIn, courses, setLoading, loading
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