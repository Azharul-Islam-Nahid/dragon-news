import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
                handleProfileUpdate(name, photoUrl);
                handleEmailVerification();

                toast(
                    "Please verify your email address.\n\n Check your spam folder if you cannot find the verification mail.",
                    {
                        duration: 8000,
                    }
                );

                setError('');

                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleProfileUpdate = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))

    }

    const handleAccepted = e => {
        setAccepted(e.target.checked)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Your Name</Form.Label>
                <Form.Control type='name' name='name' placeholder='Enter Username' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPhoto'>
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control type='text' name='url' placeholder='Photo URL' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' name='email' placeholder='Enter email' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' placeholder='Password' required />
            </Form.Group>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className='text-primary' type="checkbox"
                    onClick={handleAccepted}
                    label={<><Link className='text-decoration-none' to='/terms'>Accept terms & conditions</Link> </>} />
            </Form.Group>
            <Form.Group className='mt-2 mb-3' controlId='formBasicButton'>
                <Button variant='primary' type='submit' disabled={!accepted}>
                    Register
                </Button>
            </Form.Group>
        </Form>
    );
};

export default Register;