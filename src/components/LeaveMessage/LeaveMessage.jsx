import React from 'react'
import "./LeaveMessage.css"
import { useFormik } from 'formik'

const LeaveMessage = () => {

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },

    onSubmit: async (values) => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
          method: 'post',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(values)
      });

      if (result.ok) {
        alert('Meddelandet har skickats');
      } else {
        alert('Meddelandet har INTE skickats');
      }
    }
  });

  return (
    <section className="message">
      <div className="container">
        <p>Leave us a message</p>
        <p>for any information.</p>
        <form onSubmit={form.handleSubmit}>
          <input type="text" name="name" placeholder="Name*" value={form.values.name} onChange={form.handleChange} required autoFocus/>
          <input type="email" name="email" placeholder="Email*" value={form.values.email} onChange={form.handleChange} required/>
          <textarea name="message" cols="0" rows="6" placeholder="Your Message*" value={form.values.message} onChange={form.handleChange} required></textarea>
          <button type='submit' className='btn-yellow button'>Send message</button>
        </form>
      </div>
    </section>
  );
};

export default LeaveMessage;
