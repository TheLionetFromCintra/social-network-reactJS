import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileBgImg}>
                <img src="https://widewp.ru/images/nature/1909.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + descrip
            </div>
        </div>
    );
}

export default ProfileInfo;