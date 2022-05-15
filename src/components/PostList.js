import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import User from '../components/User';



const PostList = ({ posts, fetchPostsAndUsers }) => {
    
    useEffect(()=>{
        fetchPostsAndUsers()
    }, [])

    const renderList = () => {
        
        return posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <User userId={post.userId} />
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="ui relaxed divided list">           
           {renderList()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);