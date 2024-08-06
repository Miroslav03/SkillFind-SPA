import {
    createClientOffer,
    createFreelancerOffer,
} from "../services/offers-api";
import { UserTypes } from "../shared/types/user-types";

export function useCreateOffer(userTypes) {
    const createClientOfferHandler = async (id, data) => {
        try {
            await createClientOffer(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const createFreelancerOfferHandler = async (id, data) => {
        try {
            await createFreelancerOffer(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    switch (userTypes) {
        case UserTypes.Client:
            return createClientOfferHandler;
        case UserTypes.Freelancer:
            return createFreelancerOfferHandler;
    }
}
