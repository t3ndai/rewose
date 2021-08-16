import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(8, 'password should be 8 characters or more').required('Required')
})

function LoginForm({ page }) {
    return (
        <div>
            <h1>{page && page}</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={LoginFormSchema}
            >
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="you@mail.com" />
                    <ErrorMessage name='email' />

                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password" />
                    <ErrorMessage name='password' />

                    <button type="submit">{page && page}</button>
                </Form>

            </Formik>
        </div>
    )
}

export default LoginForm