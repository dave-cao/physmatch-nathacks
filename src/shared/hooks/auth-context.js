import { createContext } from "react";

export const Authcontex = createContext({
    isLoggedIn: false,
    userId: null,
    token: null,
    login: () => { },
    logout: () => { }
});
