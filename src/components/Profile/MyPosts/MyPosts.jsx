import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

            <div>
                My Posts

                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>

                <div className={s.posts}>
                  <Post message='Hi, how ya doing?' likesCount='15' />
                  <Post message='It is my first post!' likesCount='20' />
                </div>


            </div>
        
    );
}

export default MyPosts;