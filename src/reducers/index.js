import ActionTypes from '../constants';

export function user(state = {}, {type, payload}) {
    if (type === ActionTypes.LOGIN) {
        return payload.user;
    }

    return state;
}

export function posts(state = [], {type, payload}) {
    if (type === ActionTypes.LOAD_POSTS) {
        return payload.posts;
    }

    return state;
}
