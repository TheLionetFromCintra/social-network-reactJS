import React from 'react';
import { connect } from 'react-redux';
import { toggleFollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from '../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Common/Preloader/Preloader';



class UsersContainer extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount); refactor

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {

        return <>
                <Users totalUsersCount= {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      users = {this.props.users}
                      toggleFollow = {this.props.toggleFollow}
                      onPageChanged = {this.onPageChanged} />  
                {this.props.isFetching ? <Preloader /> : null}
               </>       

    }
}




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(followToggleCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersCreator(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageCreator(pageNumber));
//         },
//         // setTotalUsersCount: (totalCount) => {
//         //     dispatch(setTotalUsersCountCreator(totalCount));
//         // } refactor
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingCreator(isFetching));
//         },
//     }
// }

export default connect(mapStateToProps, 
    {
        toggleFollow,
        setUsers,
        setCurrentPage,
        // setTotalUsersCount, refactor
        toggleIsFetching,
    }
    )(UsersContainer);
