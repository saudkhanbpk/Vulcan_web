import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../config/config';

const AuthDetails = () => {
    const [authUser, setUserAuth] = useState(null);


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserAuth(user);
            } else {
                setUserAuth(null);
            }
        })

        return ()=>{
            listen();
        }
    }, [])
    const logout = ()=>{
        auth.signOut();
    }

    return (
        <div>
            {
                authUser ? <> <p>{`Signed In as ${authUser.email}`}</p> <button onClick={logout}>Sign Out</button>
                </>
                    : <p>Signed Out</p>
            }
        </div>
    )
}

export default AuthDetails;