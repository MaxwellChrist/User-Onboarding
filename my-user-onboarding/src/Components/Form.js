import React from 'react';

function Form(props) {

    const { values, poof, errors, submit, disabled } = props;

    const onPoof = e => {
        const { name, type, value, checked } = e.target;
        const grabberValue = type === 'checkbox' ? checked : value;
        poof(name, grabberValue);
    }

    return (
        <form>
            <div className="container">
                <div className='errorList'>
                    {/* <h3>{errors.name}</h3>
                    <h3>{errors.email}</h3>
                    <h3>{errors.password}</h3> */}
                </div>
                <label>Name:
                    <input 
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onPoof}
                    />
                </label>
                <label>Email:
                    <input 
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={onPoof}
                    />
                </label>
                <label>Password:
                    <input 
                        name="name"
                        type="text"
                        value={values.password}
                        onChange={onPoof}
                    />
                </label>
                <label>Terms of Service (check if you agree):
                    <input 
                        name="name"
                        type="text"
                        checked={values.termsOfService}
                        onChange={onPoof}
                    />
                </label>
                <button type="submit" disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}

export default Form;