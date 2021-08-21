import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user-default.png';


const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
             {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <div className={styles.userPhoto}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar" />
                            </div>
                            <div className={styles.btnWrapper}>
                                {u.followed ? <button onClick={() => {props.toggleFollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.toggleFollow(u.id)}}>Follow</button>}
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


            <div>
                {
                pages.map(p => {
                    return <span className={`${props.currentPage === p && styles.selectedPage} ${styles.paginationItem}`}
                    onClick={() => {props.onPageChanged(p)}}>{p}</span>
                })
                }
            </div>



        </div>

    );

    
}

export default Users;