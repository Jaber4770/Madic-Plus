import { useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Components/Login/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const SignInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    const Logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        Logout,
        user,
        SignInUsingGoogle

    }
};

export default useFirebase;