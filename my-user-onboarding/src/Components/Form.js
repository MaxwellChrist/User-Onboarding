import React from 'react';

function Form(props) {

    const { values, change, errors, submit, disabled } = props;

    const poof = e => {
        const { name, type, value, checked } = e.target;
        const grabberValue = type === 'checkbox' ? checked : value;
        change(name, grabberValue);
    }


    return (
        <form>
            <div className="container">
                <label>Name:
                    <input 
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={poof}
                    />
                </label>
                <label>Email:
                    <input 
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={poof}
                    />
                </label>
                <label>Password:
                    <input 
                        name="name"
                        type="text"
                        value={values.password}
                        onChange={poof}
                    />
                </label>
                <label>Terms of Service (check if you agree):
                    <input 
                        name="name"
                        type="text"
                        value={values.termsOfService}
                        onChange={poof}
                    />
                </label>
            </div>
        </form>
    )
}

export default Form;