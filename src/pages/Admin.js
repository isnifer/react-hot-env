import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Admin extends Component {
    render() {
        return (
            <div className="admin-page">
                <h1>Admin Page</h1>

                <Link to="/posts">Posts</Link>
            </div>
        );
    }
}
