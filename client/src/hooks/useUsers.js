import { useEffect, useState } from "react";
import {
    getFreelancerInfo,
    getClientInfo,
    addDescription,
    editDescription,
    getUserInfo,
} from "../services/users-api";
import { UserTypes, ComandTypes } from "../shared/types/user-types";

export function useUserInfo(userType, id) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let user;
                switch (userType) {
                    case UserTypes.Freelancer:
                        user = await getFreelancerInfo(id);
                        console.log(user);
                        break;
                    case UserTypes.Client:
                        user = await getClientInfo(id);
                        break;
                }
                setUser(user);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [userType, id]);

    return { user, loading, error };
}

export function useUserInfoId(id) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            let user;
            try {
                user = await getUserInfo(id);
                setUser(user);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    return { user, loading, error };
}

export function useDescription(commandTypes) {
    const addDescriptionHandler = async (id, data) => {
        try {
            await addDescription(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const editDescriptionHandler = async (id,data) => {
        try {
            await editDescription(id, data);
        } catch (error) {
            throw new Error(error);
        }
    };

    switch (commandTypes) {
        case ComandTypes.Add:
            return addDescriptionHandler;
        case ComandTypes.Edit:
            return editDescriptionHandler;
    }
}
