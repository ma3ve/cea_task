import {
    GET_POSTS,
    ADD_POST,
    REMOVE_POST,
    LIKE_POST,
    DISLIKE_POST,
    UPDATE_POST,
} from "./types";

export const get_posts = (posts) => {
    return {
        type: GET_POSTS,
        posts,
    };
};

export const add_post = (new_post) => {
    return {
        type: ADD_POST,
        new_post,
    };
};

export const remove_post = (delete_id) => {
    return {
        type: REMOVE_POST,
        delete_id,
    };
};

export const like_post = (array_id) => {
    return {
        type: LIKE_POST,
        array_id,
    };
};

export const dislike_post = (array_id) => {
    return {
        type: DISLIKE_POST,
        array_id,
    };
};
export const update_post = (updated_post, array_id) => {
    return {
        type: UPDATE_POST,
        updated_post,
        array_id,
    };
};
