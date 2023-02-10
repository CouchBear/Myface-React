
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
            <div className='card'>

                <div className='image_div'>
                    <img className='card_image' src={post.imageUrl} alt={post.message} />
                    <div className='card_button_section'>
                        <button type="submit" name={`${post.id}/like`} onClick={e => handleClick(e)}><span>&#x1F44D;</span> </button>
                        <button type="submit" name={`${post.id}/dislike`} onClick={e => handleClick(e)}><span>&#x1F44E;</span></button>



                    </div>
                </div>
                <li className='card_body'>{post.createdAt.toString()}</li>

            </div>
        )
    })

    return (
        <div className='page'>
            <div className='page_title'>Posts</div>

            <div className='posts_box'>{posts}</div>
            <div className='links_section'>{myData.previous ?
                <Link className='link' onClick={() => setUrlQuery(myData.previous)} to={myData.previous}>Previous</Link> :
                <></>}

                {myData.next ?
                    <Link className='link' onClick={() => setUrlQuery(myData.next)} to={myData.next}>Next</Link> :
                    <></>}
            </div>

        </div>
    );
}


