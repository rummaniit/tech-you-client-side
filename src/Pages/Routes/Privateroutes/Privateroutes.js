import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/Authprovider';

const Privateroutes = ({ children }) => {
    let location = useLocation()
    let { users, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            {/*  Loader  */}
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </>

    }
    if (!users) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default Privateroutes;