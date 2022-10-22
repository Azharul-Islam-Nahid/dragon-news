import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password, photoUrl);

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
            })
            .catch(error =>
                console.error(error))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label>Your Name</Form.Label>
                <Form.Control type='name' name='name' placeholder='Enter Username' required />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPhoto'>
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control type='text' name='url' placeholder='Photo URL' required />
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
                We'll never share your email with anyone else.
            </Form.Text>
            <Form.Group className='mt-2 mb-3' controlId='formBasicCheckbox'>
                <Button variant='primary' type='submit'>
                    Register
                </Button>
            </Form.Group>
        </Form>
    );
};

export default Register;