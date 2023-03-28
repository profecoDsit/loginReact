import { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthProvider(children){
    
    //const [user, setUser] = useState(null);
    const [user, setUser] = useState({contextValue});
    const contextValue = {
        user
    };

    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
} 

// https://github.com/profecoDsit/consultasDsit.git