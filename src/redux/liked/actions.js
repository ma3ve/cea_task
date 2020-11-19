import { ADD_LIKED, REMOVE_LIKED } from "./types";

export const add_liked = (new_post) => {
    return {
        type: ADD_LIKED,
        new_post,
    };
};

export const remove_liked = (delete_id) => {
    return {
        type: REMOVE_LIKED,
        delete_id,
    };
};
