import { ADD_DISLIKED, REMOVE_DISLIKED } from "./types";

const initialState = {
    disliked: [],
};

export const reducer = (state = initialState, action) => {
    let temp_disliked = [];
    switch (action.type) {
        case ADD_DISLIKED:
            temp_disliked = [action.new_post, ...state.disliked];
            return {
                disliked: [...temp_disliked],
            };

        case REMOVE_DISLIKED:
            temp_disliked = [...state.disliked];
            temp_disliked.splice(action.delete_id, 1);
            return {
                disliked: [...temp_disliked],
            };

        default:
            return state;
    }
};
