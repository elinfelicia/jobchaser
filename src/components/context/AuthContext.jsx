import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    const signIn = (mockUser) => {
        setUser(mockUser)
    }


    useEffect(() => {
        const mockUser = { name: "John Doe", email: "john@example.com" };
        signIn(mockUser);
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}
 export default AuthProvider
