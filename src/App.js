import React, { useState } from 'react'
import { Formik } from 'formik'

import './App.scss'
import { formSchema } from './Formik/formSchema'
import FormFormik from './UI/FormFormik'
import Heading from './UI/Heading'
import InputFormik from './UI/InputFormik'
import Button from './UI/Button'
import Modal from './UI/Modal'

const App = () => {
  const [display, setDisplay] = useState(false)

  const onModalDispaly = () => {
    setDisplay(true)
  }

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
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: '' })
          onModalDispaly()
        }}
      >
        {({ setFieldValue }) => (
          <FormFormik>
            <Heading text='Simple react-formik' />
            <InputFormik name="firstName" type="text" label="First name*" />
            <InputFormik name="lastName" type="text" label="Last name*" />
            <InputFormik name="email" type="text" label="Email*" />
            <InputFormik name="age" type="text" label="Age" />
            <div className='two-buttons'>
              <Button
                type='reset'
                text='Clean'
                styles='secondary'
                onClick={() => setFieldValue('fieldName', '')} />
              <Button
                type='submit'
                text='Send'
                styles='primary' />
            </div>
          </FormFormik>
        )}
      </Formik>

      <Modal styles={display} />
    </main >
  )
}

export default App
