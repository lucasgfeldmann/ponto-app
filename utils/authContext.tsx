import { useRouter } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

type AuthState = {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
}

export const AuthContext = createContext<AuthState>({
    isLoggedIn: false,
    logIn: () => {
        // TODO
    },
    logOut: () => {
        // TODO
    }
})


export function AuthProvider({ children }: PropsWithChildren) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter();

    const logIn = () => {
        setIsLoggedIn(true);
        router.replace("/");
    }
    const logOut = () => {
        setIsLoggedIn(false);
        router.replace("/login");
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}