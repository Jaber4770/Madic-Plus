import { useContext } from 'react';
import { AuthContext } from '../Components/ContextApi/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;