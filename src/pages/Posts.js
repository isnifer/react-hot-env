import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadPosts } from '../actions';

class Posts extends Component {
    componentDidMount() {
        this.props.loadPosts();
    }

    render() {
        return (
            <div>
                <h1>Posts Page</h1>

                <div className="posts">
                    {this.props.posts.map((post, i) => {
                        return (
                            <div className="posts__item" key={`post_${i}`}>
                                <div className="posts__title">{post.title}</div>
                                <div className="posts__content">{post.content}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default connect(({posts}) => ({posts}), {loadPosts})(Posts);
