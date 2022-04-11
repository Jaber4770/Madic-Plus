import { useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../Components/Login/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    // google sign in
    const SignInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign in with email password

    // const SignInUsingFacebook = () => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         const user = userCredential.user;
    //       })
    // }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    // log out
    const Logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        user,
        Logout,
        SignInUsingGoogle,
        // SignInUsingFacebook
    }
};

export default useFirebase;