import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


const User = ({ userId, users, fetchUser }) => {
    useEffect(() => {
        fetchUser(userId)
    }, [])

    const renderUser = () => {
        const user = users.find((user) => {
            return user.id === userId
        })
        if (!user) {
            return null;
        }

        return (
            <div className="header">
           {user.name}
            </div>
        )
    }

    return <div>{renderUser()}</div>
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUser})(User);