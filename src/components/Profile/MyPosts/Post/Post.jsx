import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

                    <div className={s.item}>
                        <img src="https://yt3.ggpht.com/ytc/AAUvwngGA5ePaLOgwYxppFNMtn5vk2zUHs5KYDqi3_3M=s900-c-k-c0x00ffffff-no-rj" />
                        
                        {props.message}

                        <div>
                            <span>like</span> <span>{props.likesCount}</span>
                        </div>
                        
                    </div>
                 
    );
}

export default Post;