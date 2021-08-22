import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


const Login = ({ login, isAuthenticated }) => {
const [formData, setFormData] = useState({
email: '',
password: ''
});


const { email, password } = formData;


const onChange = e =>
setFormData({ ...formData, [e.target.name]: e.target.value });


const onSubmit = e => {
e.preventDefault();
login(email, password);
};


if (isAuthenticated) {
return ;
}


return (

Sign In

Sign Into Your Account











Don't have an account? Sign Up


);
};


Login.propTypes = {
login: PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { login })(Login);