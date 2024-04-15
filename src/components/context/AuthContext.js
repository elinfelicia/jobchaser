import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext(null);
function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const signIn = (mockUser) => {
        setUser(mockUser);
    };
    useEffect(() => {
        const mockUser = { name: "John Doe", email: "john@example.com" };
        signIn(mockUser);
    }, []);
    return _jsx(AuthContext.Provider, { value: user, children: children });
}
export default AuthProvider;
