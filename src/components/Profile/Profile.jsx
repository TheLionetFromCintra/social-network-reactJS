import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (

        <div>
            <div className={s.profileBgImg}>
                <img src="https://widewp.ru/images/nature/1909.jpg" />
            </div>
            <div>
                ava + descrip
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;