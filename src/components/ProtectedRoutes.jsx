import React, { useEffect } from 'react';

import { Navigate, Outlet, useLocation } from 'react-router-dom'

const ProtectedRoutes = ({ allowedRoles }) => {

    //const auth = useAuth()
    const location = useLocation();
    let token = localStorage.getItem('jws_token');

    // console.log(allowedRoles?.find(roles => roles === role));
    // console.log(role);
    // console.log(allowedRoles);

    if (token) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


}

export default ProtectedRoutes;