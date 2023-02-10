
import React, { useState, useEffect } from 'react';
import { Page } from '../../../src/models/api/page'
import { UserModel } from '../../../src/models/api/userModel'
// import { UserPostModel } from '../../../src/models/api/userModel'
import { Moment } from 'moment'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Users() {


    const [myData, setMyData] = useState<Page<UserModel> | null>(null);
    const [urlQuery, setUrlQuery] = useState<string | null>("/users");
    useEffect(() => {
        fetch(`http://localhost:3001${urlQuery}`)
            .then(response => response.json())
            .then(response => setMyData(response))


    }, [urlQuery]);
    if (!myData) {
        return <div>Waiting for data!</div>
    }
    console.log(myData)
    const userList = myData.results.map(userItem => {
        return (
            <div className='userList_box' key={userItem.id}>
                <img className='user_image' src={userItem.profileImageUrl} alt="user profile image" />
                <Link className='link_username' to={`/users/${userItem.id}`}>{userItem.username}</Link>

            </div>
        )
    })

    return (
        <div className='page'>
            <div className='page_title'>Users</div>

            <div>{userList}</div>
            <div>{myData.previous ?
                <Link className='links' onClick={() => setUrlQuery(myData.previous)} to={myData.previous}>Previous</Link> :
                <></>}

                {myData.next ?
                    <Link className='links' onClick={() => setUrlQuery(myData.next)} to={myData.next}>Next</Link> :
                    <></>}
            </div>

        </div>
    );
}
