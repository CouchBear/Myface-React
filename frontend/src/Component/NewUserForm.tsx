import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";


function NewUserForm(props: any) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');


    const handleSubmit = (e: any) => {
        const [status, setStatus] = useState('')


        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: { name },
                username: { username },
                email: { email },
                coverImageUrl: { coverImageUrl },
                profileImageUrl: { profileImageUrl }
            })
        };
        fetch(`http://localhost:3001/users/create`, requestOptions)
            .then(response => response.json())
            .then(data => setStatus(data))
            .then(data => console.log(data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)


        console.log({ name });
        console.log({ coverImageUrl });

        e.preventDefault();
    }

    return (
        <div>
            {status && (
                <Navigate to="/users" replace={true} />
            )}
            <form onSubmit={e => { handleSubmit(e); console.log("submitted form") }}>
                <label>Name</label>
                <br />
                <input
                    name='name'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label>Username</label>
                <br />
                <input
                    name='username'
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label>Email</label>
                <br />
                <input
                    name='email'
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}

                />
                <label>Cover Image URL</label>
                <br />
                <input
                    name='coverImageUrl'
                    type='text'
                    value={coverImageUrl}
                    onChange={e => setCoverImageUrl(e.target.value)}

                />
                <label>Profile Image URL</label>
                <br />
                <input
                    name='profileImageUrl'
                    type='text'
                    value={profileImageUrl}
                    onChange={e => setProfileImageUrl(e.target.value)}

                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default NewUserForm;
