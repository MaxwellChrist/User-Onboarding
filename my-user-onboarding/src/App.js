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

  const postUsers = () => {
    axios.post('https://reqres.in/api/users', values)
      .then(res => {
        // console.log(res.data);
        setUsers([res.data, ...users]);
        setValues(initialUsers);
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

  const formSubmit = () => {
    const newFriend = {
      username: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
      termsOfService: values.termsOfService === true
    }
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postUsers(values);
  }

  useEffect(() => {
    Schema.isValid(values).then(valid => setDisabled(!valid));
  }, [values])

  return (
    <div className="App">
      <h1>Welcome New Users!</h1>
      <Form 
        values={values}
        change={inputPoof}
        errors={errors}
        submit={postUsers}
        disabled={disabled}
      />
      {users.map((u, index) => (
        <div id={index}>
          <p>{u.name} was created at {u.createdAt} with the email of {u.email}. Welcome aboard!</p>
        </div>
      ))}
    </div>
  );
}

export default App;
