import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const { signIn } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
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
                    Login
                </Button>
            </Form.Group>
        </Form>
    );
};

export default Login;