import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user , setUser] =useState({});

    const [isLoading , setIsLoading] = useState(true);

    const auth = getAuth();

    const handleLogin = (email , password) =>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     console.log(result.user);
        //     setUser(result.user);
        // })
        // .finally(()=> setIsLoading(false));
    }

    const signInUsingGoogle = ()=>{
        setIsLoading(true);

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth , googleProvider);
        // .then(result=>{
        //     setUser(result.user);
        // })
        // .finally(()=> setIsLoading(false));
    }


    const logOut =()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{ })
        .finally(()=> setIsLoading(false));
    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth , user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return ()=> unsubscribed;
    } ,[]);

    return {
        user,
        isLoading,
        setIsLoading,
        handleLogin,
        signInUsingGoogle,
        logOut
    };
}

export default useFirebase;
