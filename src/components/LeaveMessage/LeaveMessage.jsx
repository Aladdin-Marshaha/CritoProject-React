import React, { useState, useEffect } from 'react';
import "./LeaveMessage.css";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const LeaveMessage = () => {
  const [messageStatus, setMessageStatus] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().test('word-count', 'Message must be at least three words', value => {
        if (value) {
          const wordCount = value.trim().split(/\s+/).length;
          return wordCount >= 3;
        }
        return false;
      }).required('Message is required'),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(values)
        });

        if (result.ok) {
          setMessageStatus('Meddelandet har skickats');
          resetForm();
          setIsError(false);
        } else {
          setMessageStatus('Meddelandet har INTE skickats');
          setIsError(true);
        }
        setShowStatus(true);

        setTimeout(() => {
          setShowStatus(false);
        }, 3000);
      } catch (error) {
        setMessageStatus('Något gick fel vid skickandet av meddelandet.');
        setShowStatus(true);
        setIsError(true);

        setTimeout(() => {
          setShowStatus(false);
        }, 3000);

        console.error('Fel: ', error);
      }
    }
  });

  return (
    <section className="message">
      <div className="container">
        <p>Leave us a message</p>
        <p>for any information.</p>
        <form onSubmit={form.handleSubmit} noValidate>
          <input type="text" name="name" placeholder="Name*" value={form.values.name} onChange={form.handleChange}  autoFocus/>
          {form.errors.name && form.touched.name && <div className="error-message">{form.errors.name}</div>}
          <input type="email" name="email" placeholder="Email*" value={form.values.email} onChange={form.handleChange} />
          {form.errors.email && form.touched.email && <div className="error-message">{form.errors.email}</div>}
          <textarea name="message" cols="0" rows="6" placeholder="Your Message*" value={form.values.message} onChange={form.handleChange}></textarea>
          {form.errors.message && form.touched.message && <div className="error-message">{form.errors.message}</div>}
          <button type='submit' className='btn-yellow button'>Send message</button>
        </form>
        <div style={{ height: "50px" }}></div>
        <div className="status-container">
          {showStatus && (
            <p className={`messageStatus ${isError ? 'error' : ''} ${showStatus ? 'fade-in' : 'fade-out'}`}>
              {messageStatus}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeaveMessage;
