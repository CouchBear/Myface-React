
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
            <div key={userItem.id}>
                <img src={userItem.profileImageUrl} alt="user profile image" />
                <Link to={`/users/${userItem.id}`}>{userItem.username}</Link>

            </div>
        )
    })

    return (
        <div>
            <h1>Users</h1>

            <div>{userList}</div>
            <div>{myData.previous ?
                <Link onClick={() => setUrlQuery(myData.previous)} to={myData.previous}>Previous</Link> :
                <></>}

                {myData.next ?
                    <Link onClick={() => setUrlQuery(myData.next)} to={myData.next}>Next</Link> :
                    <></>}
            </div>

        </div>
    );
}
