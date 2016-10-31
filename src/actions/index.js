import ActionTypes from '../constants';

export function loadPosts() {
    return {
        type: ActionTypes.LOAD_POSTS,
        payload: {
            posts: [
                {title: 'Title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores perferendis cum nobis, doloribus, ex nisi quibusdam omnis numquam minus illum sint veritatis repellat distinctio accusantium quo fuga quam. Itaque.'},
                {title: 'Title 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores perferendis cum nobis, doloribus, ex nisi quibusdam omnis numquam minus illum sint veritatis repellat distinctio accusantium quo fuga quam. Itaque.'},
                {title: 'Title 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores perferendis cum nobis, doloribus, ex nisi quibusdam omnis numquam minus illum sint veritatis repellat distinctio accusantium quo fuga quam. Itaque.'},
                {title: 'Title 4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores perferendis cum nobis, doloribus, ex nisi quibusdam omnis numquam minus illum sint veritatis repellat distinctio accusantium quo fuga quam. Itaque.'},
                {title: 'Title 5', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores perferendis cum nobis, doloribus, ex nisi quibusdam omnis numquam minus illum sint veritatis repellat distinctio accusantium quo fuga quam. Itaque.'},
            ]
        }
    };
}

export function loadUserProfile(user, password) {
    return {
        type: ActionTypes.LOGIN,
        payload: {
            user: {
                id: 42,
                name: user,
            },
        }
    };
}

export function badLoadUserProfile() {
    return {
        type: ActionTypes.UNAUTH_LOGIN,
    }
}
