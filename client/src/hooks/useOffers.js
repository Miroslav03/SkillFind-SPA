import { useEffect, useState } from "react";
import {
    createClientOffer,
    createFreelancerOffer,
    deleteClientOffer,
    editClientOffer,
    editFreelancerOffer,
    getOneClient,
    getOneFreelancer,
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

export function useOfferInfo(userType, id) {
    const [offer, setOffer] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let offer;
                switch (userType) {
                    case UserTypes.Client:
                        offer = await getOneClient(id);
                        break;
                    case UserTypes.Freelancer:
                        offer = await getOneFreelancer(id);
                        console.log(offer);
                        break;
                }
                setOffer(offer);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [userType, id]);

    return { offer, loading, error };
}

export function useOfferEdit(userType) {
    const editFreelancerOfferHandler = async (id, data) => {
        try {
            await editFreelancerOffer(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const editClientOfferHandler = async (id, data) => {
        try {
            await editClientOffer(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    switch (userType) {
        case UserTypes.Client:
            return editClientOfferHandler;
        case UserTypes.Freelancer:
            return editFreelancerOfferHandler;
    }
}

export function useDeleteOffer(userType) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteOffer = async (id) => {
        setLoading(true);
        try {
            switch (userType) {
                case UserTypes.Client:
                    await deleteClientOffer(id);
                    break;
                case UserTypes.Freelancer:
                    await getOneFreelancer(id);//Needs to be updated
                    break;
            }
        } catch (err) {
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { deleteOffer, loading, error };
}
