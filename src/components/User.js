import React, { useEffect } from 'react';
import { connect } from 'react-redux';


const User = ({ userId, user, fetchUser }) => {

    const renderUser = () => {
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

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(User);