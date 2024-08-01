import requester from "./requester";
import { environment } from "../shared/constants/apiUrl";
import { PATH } from "../shared/constants/paths";

export const loginFreelancer = (email, password) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.LOGIN_FREElANCER}`, {
        email,
        password,
    });

export const loginClient = (email, password) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.LOGIN_CLIENT}`, {
        email,
        password,
    });

export const registerFreelancer = (data) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.REGISTER_FREElANCER}`, {
        data,
    });

export const registerClient = (data) =>
    requester.post(`${environment.apiUrl}/${PATH.USERS.REGISTER_CLIENT}`, {
        data,
    });
