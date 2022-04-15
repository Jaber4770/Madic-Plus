import { useContext } from 'react';
import { AuthContext } from '../Components/ContextApi/AuthProvider';

// this is useAuth, it will use every where, when need

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;