import React from 'react'
import { useState, useEffect } from 'react';
import { FormRow, Logo } from "../index";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../feature/userSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
};


function Register() {
    const [values, setValues] = useState(initialState);
const { user, isLoading } = useSelector (store => store.user);
const dispatch = useDispatch();
    // redux toolkit and useNavigate later
const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already logged in using local storage
        if (user) {
          setTimeout(() => {
            navigate('/');
          },2000)
        }
      }, [user]);

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log`${name}:${value}`;
        setValues({...values,[name]:value})
    };

    const authenticateUser = (userData) => {
        // Save user data to local storage
        localStorage.setItem('user', JSON.stringify(userData));
        // Dispatch the action to update the Redux store
        dispatch(loginUser(userData));
      };

    const onSubmit = (e) => {
        e.preventDefault();
        const {name,email,password,isMember} = values
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please fill out all fields');
            return;
        }
        if(isMember) {
        dispatch(loginUser({email:email, password:password}))
        return;
    } else {
    dispatch(registerUser({name, email, password}));
    authenticateUser({ name, email });
}};

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember});
    };
    
    return (
        <Wrapper>
        <div className='full-page'>
            <Logo />
            <form className='form' onSubmit={onSubmit}>

                {/* if values. is member is true display login, if it is false, display register */}
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>

                {/* email field */}
                <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />

                {/* name field */}
                {/* if value.isMember is false,  also display the name field*/}
                {!values.isMember && (
                <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />
                )}  

                {/* password field */}
                <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />

                <button type='submit' className='btn btn-primary btn-block' disabled={isLoading}>
                    {isLoading ? 'loading...' : 'submit'}
                </button>

                <p> {values.isMember?'Not a member yet?': 'Already a member?'}
                    <button type="button" onClick={toggleMember} className='btn btn-primary member-btn'>{values.isMember?'Register':'Login'}</button>
                </p>
            </form>
        </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
div {
    display: grid;
align-items: center;
}
.logo {
    height:100px;
    display: grid;
justify-content: center;
}
.form {
    max-width: 400px;
    display: grid;
justify-content: center;
    background-color: aliceblue;
  }

`;

export default Register