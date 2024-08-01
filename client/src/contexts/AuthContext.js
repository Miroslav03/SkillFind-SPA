const { createContext } = require("react");

export const AuthContext = createContext({
    email: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: () => null,
});
