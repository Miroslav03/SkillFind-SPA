import { useContext } from "react";
import { loginFreelancer, loginClient } from "../services/auth-api";
import { UserTypes } from "../shared/types/user-types";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = (userType) => {
    const { changeAuthState } = useContext(AuthContext);

    const loginFreelancerHandler = async (email, password) => {
        const result = await loginFreelancer(email, password);
        changeAuthState(result);
    };

    const loginClientHandler = async (email, password) => {
        const result = await loginClient(email, password);
        changeAuthState(result);
    };

    switch (userType) {
        case UserTypes.Freelancer:
            return loginFreelancerHandler;
        case UserTypes.Client:
            return loginClientHandler;
    }
};
