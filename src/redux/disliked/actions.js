import { ADD_DISLIKED, REMOVE_DISLIKED } from "./types";

export const add_disliked = (new_post) => {
    return {
        type: ADD_DISLIKED,
        new_post,
    };
};

export const remove_disliked = (delete_id) => {
    return {
        type: REMOVE_DISLIKED,
        delete_id,
    };
};
