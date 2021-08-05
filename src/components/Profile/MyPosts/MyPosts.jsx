import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how ya doing?", likesCount: 15},
        {id: 2, message: "It is my first post!", likesCount: 20}
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (

            <div className={s.postsWrapper}>
                <h3>My Posts</h3>

                <div>
                    <div>
                        <textarea></textarea>
                    </div>

                    <div>
                        <button><span>Add post</span></button>
                    </div>
                    
                </div>

                <div className={s.posts}>
                    {postsElements}
                </div>


            </div>
        
    );
}

export default MyPosts;