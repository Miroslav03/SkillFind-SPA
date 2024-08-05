import { useEffect, useState } from "react";
import { getFreelancerInfo, getClientInfo } from "../services/users-api";
import { UserTypes } from "../shared/types/user-types";

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
