import { ADD_POST } from "./action-types";

const initialState = {
    posts: [
    //     id = 3,
    // title = "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    // body = "et iusto sed quo iure voluptatem occaecati omnis eligendi"
]
}

const rootReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        // state.posts.push(action.payload);
        return Object.assign({}, state,
            { posts: state.posts.concat(action.payload) });
    }
    return state;
}

export default rootReducer;


