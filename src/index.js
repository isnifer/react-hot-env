import '../less/_main.less';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import checkAuthHelper from './common/utils/checkAuthHelper';
import { badLoadUserProfile } from './actions';
import store from './store';
import Wrapper from './pages/Wrapper';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';

const baseUrl = '/';
const loginUrl = `${baseUrl}login`;
const checkAuth = checkAuthHelper(store, badLoadUserProfile, baseUrl, loginUrl);

function MyReactApp () {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path={baseUrl} component={Wrapper} onEnter={checkAuth}>
                    <IndexRoute component={Admin} />
                    <Route path="login" component={Login} />
                    <Route path="posts" component={Posts} />
                    <Route path="*" component={NotFound} />
                </Route>
            </Router>
        </Provider>
    );
}

render(React.createElement(MyReactApp), document.getElementById('react-root'));
