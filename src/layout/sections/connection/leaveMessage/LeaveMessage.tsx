import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Section, Field, Form, ButtonWrapper } from './LeaveMessage.styles'
import { SectionTitle } from '../../../../shared/components/SectionTitile'
import { Button } from '../../../../shared/components/Button'

export const LeaveMessage = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
        }
      )
      .then(() => {
        alert('SUCCESS!')
      })
      .catch(_error => {
        alert('FAILED...')
      })

    e.currentTarget.reset()
  }

  return (
    <Section id={'message'}>
      <SectionTitle>Leave me your message</SectionTitle>
      <Form ref={form} onSubmit={sendEmail}>
        <Field name={'name'} placeholder={'Your Full Name'} required />
        <Field name={'email'} placeholder={'Your Email'} required />
        <Field name={'subject'} placeholder={'Subject'} />
        <Field
          as={'textarea'}
          id={'textField'}
          name={'message'}
          placeholder={'Your Message'}
          required
        />
        <ButtonWrapper>
          <Button type={'submit'}>Send Message</Button>
          <Button type={'reset'}>Reset</Button>
        </ButtonWrapper>
      </Form>
    </Section>
  )
}
