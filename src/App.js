import React from 'react'
import { Formik } from 'formik'

import './App.scss'
import { formSchema } from './Formik/formSchema'
import FormFormik from './UI/FormFormik'
import Heading from './UI/Heading'
import InputFormik from './UI/InputFormik'
import TwoButtons from './UI/TwoButtons'

function App() {
  return (
    <main>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          age: ''
        }}
        validationSchema={formSchema}
        onSubmit={values => {
          alert('Form send!')
        }}
      >
        {() => (
          <FormFormik>
            <Heading text='Simple react-formik' />
            <InputFormik name="firstName" type="text" label="First name*" />
            <InputFormik name="lastName" type="text" label="Last name*" />
            <InputFormik name="email" type="text" label="Email*" />
            <InputFormik name="age" type="text" label="Age" />
            <TwoButtons />
          </FormFormik>
        )}
      </Formik>
    </main >
  )
}

export default App
