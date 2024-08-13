const PATH = {
    CLIENTS: {
        REGISTER: "/register",
        GET_ONE: "/profile/:id",
        GET_ALL: "/all",
        GET_ALL_CATEGORY: "/all/:category",
    },
    FREELANCERS: {
        REGISTER: "/register",
        GET_ONE: "/profile/:id",
        GET_ALL: "/all",
        GET_ALL_CATEGORY: "/all/:category",
    },
    USERS: {
        LOGIN: "/login",
        LOGOUT: "/logout",
        GET_ONE: "/profile/:id",
        DESCRIPTION_ADD: "/description/add/:id",
        DESCRIPTION_EDIT: "/description/edit/:id",
    },
    OFFERS: {
        ALL: "/all",
        ALL_CATEGORY: "/all/:category",
        CREATE: "/create",
        GET_ONE: "/:id",
        DELETE: "/delete/:id",
        EDIT: "/edit/:id",
        SEND: "/send",
        APPLY: "/apply",
        DECLINE: "/decline",
    },
};

module.exports = PATH;
