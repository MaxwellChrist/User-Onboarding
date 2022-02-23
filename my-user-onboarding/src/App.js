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
}
const initialUsers = [];
const initialDisabled = true;

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(res => {
  //         console.log(res.data)
  //     })
  //     .catch(err => {
  //         console.log(err);
  //     })
  // }
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
        // submit={}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
