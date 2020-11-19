import { NAV_CHANGE_PAGE } from "./types";

const initialState = {
    nav_page: "/",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NAV_CHANGE_PAGE:
            return {
                ...state,
                nav_page: action.page,
            };

        default:
            return state;
    }
};
