import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";


function NewPostForm(props: any) {
    const [message, setName] = useState('');
    const [imageUrl, setUsername] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState(Number);

    function handleSubmit(e: any) {

        e.preventDefault();


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: message,
                imageUrl: imageUrl
            })
        };
        fetch(`http://localhost:3001/posts/create`, requestOptions)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.status === 200) { setStatus(response.status); }
                else {
                    // setError(response.errors);
                    throw new Error(`${response.errors[0].param} is invalid`);
                }
            })
            .catch(error => setError(error.message));


        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }

    return (
        <div>
            {status === 200 ?
                <Navigate to="/posts" replace={true} /> : <h2>{error}</h2>
            }
            <form onSubmit={e => { handleSubmit(e); console.log("submitted form") }}>
                <label>Message</label>
                <br />
                <input
                    name='message'
                    type='text'
                    value={message}
                    onChange={e => setName(e.target.value)}
                />

                <label>ImageUrl</label>
                <br />
                <input
                    name='imageUrl'
                    type='text'
                    value={imageUrl}
                    onChange={e => setUsername(e.target.value)}
                />



                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewPostForm;
