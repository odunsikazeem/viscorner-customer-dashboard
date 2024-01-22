import React from 'react'
import { useState, useEffect } from 'react';
import { FormRow } from "../index";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../feature/userSlice';

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

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log`${name}:${value}`;
        setValues({...values,[name]:value})
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
    }
    dispatch(registerUser({name, email, password}));
    };

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember});
    };
    
    return (
        <div className='full-page'>
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

                <button type='submit' className='btn btn-primary btn-block'>
                    submit
                </button>

                <p> {values.isMember?'Not a member yet?': 'Already a member?'}
                    <button type="button" onClick={toggleMember} className='btn btn-primary member-btn'>{values.isMember?'Register':'Login'}</button>
                </p>
            </form>
        </div>
    );
}

export default Register