import React, { createContext, useState, useEffect } from "react";

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext<User | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const signIn = (mockUser: User) => {
        setUser(mockUser);
    }

    useEffect(() => {
        const mockUser: User = { name: "John Doe", email: "john@example.com" };
        signIn(mockUser);
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
