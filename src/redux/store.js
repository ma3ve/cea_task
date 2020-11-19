import { createStore, combineReducers } from "redux";
import { reducer as posts_reducer } from "./posts/reducer";
import { reducer as liked_reducer } from "./liked/reducer";
import { reducer as disliked_reducer } from "./disliked/reducer";
import { reducer as other_reducer } from "./others/reducer";

const rootReducer = combineReducers({
    posts: posts_reducer,
    liked: liked_reducer,
    disliked: disliked_reducer,
    others: other_reducer,
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
