import React from 'react';
import { connect } from 'react-redux';
import { followToggleCreator, setUsersCreator} from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(followToggleCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;