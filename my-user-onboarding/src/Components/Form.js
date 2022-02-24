import React from 'react';

function Form(props) {

    const { change, submit, errors, disabled } = props;
    const { name, email, password, termsOfService } = props.values;

    const onChange = e => {
        const { name, type, value, checked } = e.target;
        const grabberValue = type === 'checkbox' ? checked : value;
        change(name, grabberValue);
    }

    const onSubmit = e => {
        e.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="container">
                <div className='errorList'>
                    <h3>{errors.name}</h3>
                    <h3>{errors.email}</h3>
                    <h3>{errors.password}</h3>
                    <h3>{errors.termsOfService}</h3>
                </div>
                <label>Name:
                    <input 
                        name="name"
                        type="text"
                        value={name}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input 
                        name="email"
                        type="text"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input 
                        name="password"
                        type="text"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service (need to agree in order to become a member):
                    <input 
                        name="termsOfService"
                        type="checkbox"
                        checked={termsOfService}
                        onChange={onChange}
                    />
                </label>
                <button type="submit" disabled={disabled}>Submit</button>
            </div>
        </form>
    )
}

export default Form;