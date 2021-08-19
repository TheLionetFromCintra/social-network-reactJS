import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-default.png';



class Users extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {
        return (
            <div>
                 {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={styles.wrapper}>
                            <div className={styles.left}>
                                <div className={styles.userPhoto}>
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar" />
                                </div>
                                <div className={styles.btnWrapper}>
                                    {u.followed ? <button onClick={() => {this.props.toggleFollow(u.id)}}>Unfollow</button>
                                    : <button onClick={() => {this.props.toggleFollow(u.id)}}>Follow</button>}
                                </div>
                            </div>
                            <div className={styles.right}>
                                <div>
                                    <span>{u.name}</span>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div><span>country?</span></div>
                                    <div><span>city?</span></div>
                                </div>
                            </div>
                        </div>
                    </div>)
                 }
            </div>
    
        );
    }
}

export default Users;