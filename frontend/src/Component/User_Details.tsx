
import React, { useState, useEffect } from 'react';
import { Page } from '../../../src/models/api/page'
import { UserModel } from '../../../src/models/api/userModel'
// import { UserPostModel } from '../../../src/models/api/userModel'
import { Moment } from 'moment'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import '../Styles/app.scss';



export default function User_Details() {

    let { id } = useParams();

    const [userData, setUserData] = useState<UserModel | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3001/users/${parseInt(id)}`)
            .then(response => response.json())
            .then(response => setUserData(response))


    }, []);
    if (!userData) {
        return <div>No User Data!</div>
    }
    console.log(userData.name)

    const postList = userData.posts.slice(0, 6).map((post) => {
        return (
            <div className='card'>
                <img className='card_image' src={post.imageUrl} />
                <div className='card_body'>
                    <div className='post_date'>{post.createdAt.toString()}</div>
                    <div className='post_message'>{post.message}</div>
                </div>
            </div>
        );
    })

    const likeList = userData.likes.slice(0, 6).map((post) => {
        return (
            <div className='card'>
                <img className='card_image' src={post.imageUrl} />
                <div className='card_body'>
                    <div className='post_date'>{post.createdAt.toString()}</div>
                    <div className='post_message'>{post.message}</div>
                </div>
            </div>
        );
    })

    const dislikeList = userData.dislikes.slice(0, 6).map((post) => {
        return (
            <div className='card'>
                <img className='card_image' src={post.imageUrl} />
                <div className='card_body'>
                    <div className='post_date'>{post.createdAt.toString()}</div>
                    <div className='post_message'>{post.message}</div>
                </div>
            </div>
        );
    })

    return (
        <div className='page'>
            <section className='user'>
                <img className='coverImage' src={userData.coverImageUrl} alt="cover image" />
                <div className='opaque'></div>
                <div className='profile'>
                    <img className='profile_image' src={userData.profileImageUrl} alt="profile image" />
                    <div className='profile_body'>
                        <p className='profile_name'>{userData.name}</p>
                        <p>{userData.username}</p>
                        <p>{userData.email}</p>
                    </div>
                </div>

            </section>
            <section className='posts_box'>
                <h4>My posts</h4>
                <div className='posts'>{postList}</div>
                <button className='load_button'>Load More</button>
            </section>
            <section className='posts_box'>
                <h4>{`Posts ${userData.name} Liked`}</h4>
                <div className='posts'>{likeList}</div>
                <button className='load_button'>Load More</button>
            </section>
            <section className='posts_box'>
                <h4>{`Posts ${userData.name} Disliked`}</h4>
                <div className='posts'>{dislikeList}</div>
                <button className='load_button'>Load More</button>
            </section>


        </div>
    );

}
