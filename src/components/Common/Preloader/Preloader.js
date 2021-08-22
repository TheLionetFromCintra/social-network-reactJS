import React from 'react';
import preloaderImg from '../../../assets/images/preloader.svg';

const Preloader = (props) => {
    return (
        <div>
            <img src={preloaderImg} />
        </div>
    );
}

export default Preloader;