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

export const getOneClient = (id) =>
    requester.get(`${environment.apiUrl}/${PATH.OFFERS.GET_ONE_CLIENT}/${id}`);

export const getOneFreelancer = (id) =>
    requester.get(
        `${environment.apiUrl}/${PATH.OFFERS.GET_ONE_FREELANCER}/${id}`
    );

export const editClientOffer = (id, data) =>
    requester.put(
        `${environment.apiUrl}/${PATH.OFFERS.EDIT_CLIENT}/${id}`,
        data
    );

export const editFreelancerOffer = (id, data) =>
    requester.put(
        `${environment.apiUrl}/${PATH.OFFERS.EDIT_FREELANCER}/${id}`,
        data
    );
