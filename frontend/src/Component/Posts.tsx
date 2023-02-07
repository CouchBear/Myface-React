import { useState, useEffect } from 'react';
import React from 'react';
import { Page } from '../../../src/models/api/page';
import { PostModel } from '../../../src/models/api/postModel';

export default function Posts() {
    const [myData, setMyData] = useState<Page<PostModel> | null>(null);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
            .then(response => response.json())
            .then(data => setMyData(data));

    }, [])

    const posts = myData?.results.map((post) => {
        return (<div key={post.id}>

            <p>{post.message}</p>
            <img src={post.imageUrl} />
            {/* <div>{post.createdAt.toString()}</div> */}
            {/* <div>posted by:{post.postedBy.name}</div>
            <div>liked: {post.likedBy.length}</div>
            <div>disliked:{post.dislikedBy.length}</div> */}

        </div>
        );
    })

    return (
        <div>
            <h1>Posts</h1>
            <div>{posts}</div>
        </div>
    );

}