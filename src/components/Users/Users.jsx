import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [ {id: 1, photoUrl: 'https://svirtus.cdnvideo.ru/0vyOwLs_keIXT5xmFslNWYTMxdY=/0x0:512x512/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/3c/3ce1f2a353573326c89542d398835460.jpg?m=95735b9df7184b01410ae6473b45020c', followed: false, fullName: 'Andrew S', status: 'i am a pro dota player', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, photoUrl: 'https://svirtus.cdnvideo.ru/0vyOwLs_keIXT5xmFslNWYTMxdY=/0x0:512x512/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/3c/3ce1f2a353573326c89542d398835460.jpg?m=95735b9df7184b01410ae6473b45020c', followed: true, fullName: 'Vlad D', status: 'i am a pro c# player', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, photoUrl: 'https://svirtus.cdnvideo.ru/0vyOwLs_keIXT5xmFslNWYTMxdY=/0x0:512x512/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/3c/3ce1f2a353573326c89542d398835460.jpg?m=95735b9df7184b01410ae6473b45020c', followed: false, fullName: 'Anna P', status: 'i am a pro girlfriend player', location: {city: 'Moscow', country: 'Russia'}},]
        )
    }


    return (
        <div>
             {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.wrapper}>
                        <div className={styles.left}>
                            <div className={styles.userPhoto}>
                                <img src={u.photoUrl} alt="avatar" />
                            </div>
                            <div className={styles.btnWrapper}>
                                {u.followed ? <button onClick={() => {props.toggleFollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.toggleFollow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <span>{u.fullName}</span>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>Country: <span>{u.location.country}</span></div>
                                <div>City: <span>{u.location.city}</span></div>
                            </div>
                        </div>
                    </div>
                </div>)
             }
        </div>

    );
}

export default Users;