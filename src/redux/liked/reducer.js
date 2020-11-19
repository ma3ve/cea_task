import { ADD_LIKED, REMOVE_LIKED } from "./types";

const initialState = {
    liked: [],
};

export const reducer = (state = initialState, action) => {
    let temp_liked = [];
    switch (action.type) {
        case ADD_LIKED:
            temp_liked = [action.new_post, ...state.liked];
            return {
                liked: [...temp_liked],
            };

        case REMOVE_LIKED:
            temp_liked = [...state.liked];
            temp_liked.splice(action.delete_id, 1);
            return {
                liked: [...temp_liked],
            };

        default:
            return state;
    }
};
