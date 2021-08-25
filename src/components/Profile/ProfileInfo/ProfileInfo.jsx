import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <div className={s.profileBgImg}>
                <img src="https://widewp.ru/images/nature/1909.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <span>{props.profile.fullName}</span>
                ava + descrip
            </div>
        </div>
    );
}

export default ProfileInfo;