import { createContext, useContext } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { logoutUser } from "../services/auth-api";

export const AuthContext = createContext({
    email: "",
    accessToken: "",
    name: "",
    title: "",
    isAuthenticated: false,
    changeAuthState: () => null,
    logout: () => null,
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState("auth", {});
    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const logout = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error(error);
        }
        localStorage.removeItem("auth");
        setAuthState({});
    };

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        name: authState.name,
        title: authState.title,
        changeAuthState,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);

    return authData;
}
