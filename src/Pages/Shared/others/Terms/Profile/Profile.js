import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);

    const photoUrlRef = useRef(user?.photoURL);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name);
        console.log(photoUrlRef?.current?.value);
    }

    const handleChange = e => {
        setName(e.target.value)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleChange} defaultValue={name} type='name' name='name' placeholder='Enter Username' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>photo URL</Form.Label>
                <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} type="text" placeholder="Enter photo URL" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Profile;