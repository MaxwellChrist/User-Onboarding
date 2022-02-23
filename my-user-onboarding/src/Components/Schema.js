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
        .password("Please enter a valid password")
        .required("Your password is required. Please enter a password.")
        .min(6, "Your password must contain at least 8 characters. Please try again.")
        .max(20, "Your password cannot exceed 20 characters. Please try again")
        .minUppercase(2, "Your password has to contain at least two uppercase letters. Please try again.")
        .minLowercase(2, "Your password has to contain at least two lowercase letters. Please try again.")
        .minNumbers(2, "Your password has to contain at least two numbers. Please try again."),
    termsOfService: yup.boolean()
})

export default Schema;