import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/Authprovider';

const Privateroutes = ({ children }) => {
    let location = useLocation()
    let { users, loading } = useContext(AuthContext)
    if (loading) {
        return <h1>Spinner</h1>
    }
    if (!users) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default Privateroutes;