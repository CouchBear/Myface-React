
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

    const postList = userData.posts.map((post) => {
        return (
            <div className='card'>
                <div className='card_image'> <img src={post.imageUrl} /></div>
                <div className='card_body'>
                    <div>{post.createdAt.toString()}</div>
                    <div>{post.message}</div>
                </div>
            </div>
        );
    })

    const likeList = userData.likes.map((post) => {
        return (
            <div className='card'>
                <div className='card_image'><img src={post.imageUrl} /></div>
                <div className='card_body'>
                    <div>{post.createdAt.toString()}</div>
                    <div>{post.message}</div>
                </div>
            </div>
        );
    })

    const dislikeList = userData.dislikes.map((post) => {
        return (
            <div className='card'>
                <div className='card_image'><img src={post.imageUrl} /></div>
                <div className='card_body'>
                    <div>{post.createdAt.toString()}</div>
                    <div>{post.message}</div>
                </div>
            </div>
        );
    })

    return (
        <div className='main'>
            <section className='user'>
                <img className='coverImage' src={userData.coverImageUrl} alt="cover image" />
                <div className='profile'>
                    <img className='profile_image' src={userData.profileImageUrl} alt="profile image" />
                    <div className='profile_body'>
                        <div className='profile_name'>{userData.name}</div>
                        <div>{userData.username}</div>
                        <div>{userData.email}</div>
                    </div>
                </div>

            </section>
            <section className='posts_box'>
                <h4>My posts</h4>
                <div className='posts'>{postList}</div>
            </section>
            <section className='posts_box'>
                <h4>My Likes</h4>
                <div className='posts'>{likeList}</div>
            </section>
            <section className='posts_box'>
                <h4>My dislikes</h4>
                <div className='posts'>{dislikeList}</div>
            </section>


        </div>
    );

}
