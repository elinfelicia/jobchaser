import { createContext, useState, useEffect, ReactNode } from "react";
import User from "../types/User";

type AuthContextType = User | null;

export const AuthContext = createContext<AuthContextType>(null);

type AuthProviderProps = {
    children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    const signIn = (mockUser: User) => {
        setUser(mockUser);
    };

    useEffect(() => {
        const mockUser: User = { name: "John Doe", email: "john@example.com" };
        signIn(mockUser);
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
