import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import axios from 'axios';
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


  return (
    <div className="App">
      <h1>Welcome New Users!</h1>
      <Form 
        values={values}
        // change={}
        errors={errors}
        // submit={}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
