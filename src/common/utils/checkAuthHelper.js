import { browserHistory } from 'react-router';

export default function checkAuthHelper(store, checker, baseUrl, loginUrl) {
    return async ({location: {pathname, search}}, replace, done) => {
        const { payload } = await store.dispatch(checker());

        if (!payload && pathname !== loginUrl) {
            replace({
                pathname: loginUrl,
                state: { nextPagePathname: `${pathname}${search}` }
            });
        }

        if (payload && pathname === loginUrl) {
            replace(baseUrl);
        }

        done();
    };
}
