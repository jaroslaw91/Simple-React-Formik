import React from 'react'

import './App.scss'
import Form from './UI/Form'
import Heading from './UI/Heading'
import Input from './UI/Input'
import TwoButtons from './UI/TwoButtons'

function App() {
  const handleSubmit = () => {

  }

  return (
    <main>
      <Form handleSubmit={handleSubmit}>
        <Heading text='Simple react-formik' />
        <Input
          name='name'
          label='Name*' />
        <Input
          name='surname'
          label='Surname*' />
        <Input
          type='email'
          name='email'
          label='Email*' />
        <Input
          name='age'
          label='Age' />
        <TwoButtons />
      </Form>
    </main>
  )
}

export default App
