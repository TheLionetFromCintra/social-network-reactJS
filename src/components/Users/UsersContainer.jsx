import React from 'react';
import { connect } from 'react-redux';
import { followToggleCreator, setCurrentPageCreator, setTotalUsersCountCreator, setUsersCreator} from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';



class UsersContainer extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount); refactor

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {

        return <Users totalUsersCount= {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      users = {this.props.users}
                      toggleFollow = {this.props.toggleFollow}
                      onPageChanged = {this.onPageChanged}  
        />  

    }
}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(followToggleCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageCreator(pageNumber));
        },
        // setTotalUsersCount: (totalCount) => {
        //     dispatch(setTotalUsersCountCreator(totalCount));
        // } refactor
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
