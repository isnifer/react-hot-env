import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUserProfile } from '../actions';

class Login extends Component {
    state = {
        user: '',
        password: '',
    }

    onChange = ({target: {value, name}}) => this.setState({[name]: value})

    onSubmit = async event => {
        event.preventDefault();

        await Promise.resolve()
            .then(() => this.props.loadUserProfile(this.state.user, this.state.password))
            .then(() => {
                console.log(this.props)
                if (this.props.user && this.props.user.name) {
                    this.props.router.replace(this.props.location.state.nextPagePathname);
                }
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input
                            type="text"
                            name="user"
                            placeholder="username"
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={this.onChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default connect(({user}) => ({user}), { loadUserProfile })(Login);
