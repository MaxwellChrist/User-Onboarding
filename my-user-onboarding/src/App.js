import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import axios from 'axios';
import Schema from './Components/Schema';
import * as yup from 'yup';
import './App.css';

const initialValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

const initialErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
}
const initialUsers = [];
const initialDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
          console.log(res.data);
          setUsers([res.data, ...users]);
          setValues(initialValues);
      })
      .catch(err => {
          console.log(err);
      })
  }

  const postUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const run = (name, value) => {
  yup.reach(Schema, name)
  .validate(value)
  .then(() => setErrors({...errors, [name]: ''}))
  .catch(err => setErrors({...errors, [name]: err.errors[0]}))
}

  const inputPoof = ( name, value ) => {
    run(name, value);
    setValues({...values, [name]: value })
  }

  const submitAndGo = () => {
    const newUser = {
      username: values.username.trim(),
      email: values.email.trim(),
      role: values.password.trim(),
      termsOfService: values.termsOfService
    }
    postUsers(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    Schema.isValid(values).then(valid => setDisabled(!valid));
  }, [values])

  return (
    <div className="App">
      <h1>Welcome New Users!</h1>
      <Form 
        values={values}
        poof={inputPoof}
        errors={errors}
        submit={submitAndGo}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
