import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/firebase.config";







export const AuthContext = createContext(null);

const Provider = ({ children }) => {


    const [user, setUser] = useState(null);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User", currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authValue = {
        user,
        createUser,

    }
    return (
        <div>
            <AuthContext.Provider value={authValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
Provider.propTypes = {
    children: PropTypes.node,
}

export default Provider;
