import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'First name is too short!')
        .max(15, 'First name is too long!')
        .required('Required field!'),
    lastName: Yup.string()
        .min(2, 'Last name is too short!')
        .max(15, 'Last name is too short!')
        .required('Required field'),
    email: Yup.string()
        .email('Invalid email!')
        .required('Required field')
})
