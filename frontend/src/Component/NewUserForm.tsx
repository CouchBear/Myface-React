import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";


function NewUserForm(props: any) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const [status, setStatus] = useState(Number);

    const handleSubmit = (e: any) => {

        e.preventDefault();

        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                coverImageUrl: coverImageUrl,
                profileImageUrl: profileImageUrl
            })
        };
        fetch(`http://localhost:3001/users/create`, requestOptions)
            .then(response => setStatus(response.status))


        // empty dependency array means this effect will only run once (like componentDidMount in classes)




    }

    return (
        <div>
            {status === 200 && (
                <Navigate to="/users" replace={true} />
            )}
            <form onSubmit={e => { handleSubmit(e); console.log("submitted form") }}>
                <label>Name
                    <br />
                    <input
                        name='name'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewUserForm;
