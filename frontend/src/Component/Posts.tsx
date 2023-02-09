
import React, { useState, useEffect } from 'react';
import { Page } from '../../../src/models/api/page'
import { PostModel } from '../../../src/models/api/postModel'
import { Moment } from 'moment'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export function Posts() {
    const [myData, setMyData] = useState<Page<PostModel> | null>(null);
    const [urlQuery, setUrlQuery] = useState<string | null>("/posts");
    const [status, setStatus] = useState(Number);


    useEffect(() => {
        fetch(`http://localhost:3001${urlQuery}`)
            .then(response => response.json())
            .then(response => setMyData(response))

    }, [urlQuery]);
    if (!myData) {
        return <div>Waiting for data!</div>
    }

    const handleClick = (e: any) => {

        fetch(`http://localhost:3001/posts/${e.target.name}`, { method: 'POST' })
            .then(response => setStatus(response.status))




    }

    const posts = myData.results.map(post => {
        return (
            <div>
                <img src={post.imageUrl} alt={post.message} />

                <button type="submit" name={`${post.id}/like`} onClick={e => handleClick(e)}>Like</button>
                <button type="submit" name={`${post.id}/dislike`} onClick={e => handleClick(e)}>Dislike</button>
                <li>{post.createdAt.toString()}</li>
                <li>{post.id}</li>
            </div>
        )
    })

    return (
        <div>
            <h1>Posts</h1>

            <div>{posts}</div>
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


