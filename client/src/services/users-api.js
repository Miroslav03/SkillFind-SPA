import { PATH } from "../shared/constants/paths";
import { environment } from "../shared/constants/apiUrl";
import requester from "./requester";

export const getFreelancerInfo = (id) =>
    requester.get(
        `${environment.apiUrl}/${PATH.USERS.GET_INFO_FREELANCER}/${id}`
    );

export const getClientInfo = (id) =>
    requester.get(`${environment.apiUrl}/${PATH.USERS.GET_INFO_CLIENT}/${id}`);
