import * as yup from 'yup';

const Schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Your name is required. Please enter your name.")
        .min(3, "Your name has to be longer than three characters. If shorter, please use a full name."),
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("A valid email address is required. Please enter your email."),
    password: yup
        .string()
        .required("Your password is required. Please enter a password.")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Your password must Contain 8 characters, one uppercase, one lowercase, one number and one special case character"
          ),
    termsOfService: yup.boolean()
})

export default Schema;