import requester from "./requester";
import { environment } from "../shared/constants/apiUrl";
import { PATH } from "../shared/constants/paths";

export const loginFreelancer = async (email, password) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.LOGIN_FREElANCER}`, {
        email,
        password,
    });

export const registerFreelancer = async (email, password) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.REGISTER_FREElANCER}`, {
        email,
        password,
    });
