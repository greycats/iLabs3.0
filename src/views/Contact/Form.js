import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import GoToArrow from 'components/GoToArrow'
import Loading from 'assets/imgs/loading.json'
import { LottieAnimation } from 'components/AnimationPlayer'

import './style.sass'

import { useForm, useField, splitFormProps } from 'react-form'
import sendEmail from 'scripts/email.js'

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props)

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions)

  // Build the field
  return (
    <div className='input-wrap'>
      {rest.type === 'textarea' ? <textarea {...getInputProps({ ref, ...rest })} /> : <input {...getInputProps({ ref, ...rest })} />}

      {/*
        Let's inline some validation and error information
        for our field
      */}

      {isValidating ? (
        <em className='info'>Validating...</em>
      ) : isTouched && error ? (
        <strong className='info'>{error}</strong>
      ) : message ? (
        <small className='info'>{message}</small>
      ) : null}
    </div>
  )
})

export default ({ onSubmitted = () => {} }) => {
  const [isSending, setIsSending] = useState(false)
  const defaultValues = React.useMemo(
    () => ({
      name: '',
      email: '',
      linkedIn: '',
      project: '',
    }),
    []
  )
  const {
    Form,
    values,
    pushFieldValue,
    removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error },
  } = useForm({
    defaultValues,
    onSubmit: async (values) => {
      setIsSending(true)
      await sendEmail(values)
      setTimeout(() => {
        setIsSending(false)
        onSubmitted()
      }, 500)
    },
  })

  useEffect(() => {
    console.log('isSubmitted', isSubmitted)
  }, [isSubmitted])
  return (
    <Form className='contact-form'>
      <div>
        <label>
          <span>Name *</span>
          <InputField field='name' validate={value => (!value ? 'Required' : false)} placeholder="What's your name?" />
        </label>
      </div>
      <div>
        <label>
          <span>Email *</span>
          <InputField
            field='email'
            placeholder='Your email'
            validate={async (value, instance) => {
              if (!value) {
                return 'Email is required'
              }

              if (!validateEmail(_.trim(value))) {
                return 'Please enter a valid email addresss'
              }

              console.log(`Checking email: ${value}...`)

              return false

              // We're going to mock that for now
              // await new Promise(resolve => setTimeout(resolve, 2000));
            }}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Linkedin</span>
          <InputField field='linkedin' placeholder='Can you share your Linkedin profile?' />
        </label>
      </div>
      <div>
        <label>
          <span>Project *</span>
          <InputField field='project' placeholder='Tell us about the project' validate={value => (!value ? 'Required' : false)} type='textarea' />
        </label>
      </div>

      {error ? <strong>{error}</strong> : null}

      {isSubmitting || isSending ? (
        <LottieAnimation
          width={64}
          height={64}
          options={{
            autoplay: true,
            animationData: Loading,
            loop: true,
          }}
        />
      ) : (
        <div className='btn-wrap'>
          <button type='submit' disabled={!canSubmit}>
            <GoToArrow text='Send Message' />
          </button>
        </div>
      )}
    </Form>
  )
}

function validateEmail (email) {
  //var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // var re = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
  // return re.test(email);
}
