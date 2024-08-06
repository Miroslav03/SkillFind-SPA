import { environment } from "../shared/constants/apiUrl";
import { PATH } from "../shared/constants/paths";
import requester from "./requester";

export const createClientOffer = (id, data) =>
    requester.post(`${environment.apiUrl}/${PATH.OFFERS.CREATE_CLIENT}`, {
        id,
        data,
    });

export const createFreelancerOffer = (id, data) =>
    requester.post(`${environment.apiUrl}/${PATH.OFFERS.CREATE_FREELANCER}`, {
        id,
        data,
    });
