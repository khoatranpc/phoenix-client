import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import StoreContext from '../../Global/store/StoreContext';

interface AuthProtectProps {
    children: React.ReactElement;
}
export const AuthProtect = (props: AuthProtectProps) => {
    // eslint-disable-next-line
    const [state, dispatch] = useContext(StoreContext);
    if (!state.User) {
        return <Navigate to={'/account/login'} />
    }
    return (
        <>
            {props.children}
        </>
    )
}
