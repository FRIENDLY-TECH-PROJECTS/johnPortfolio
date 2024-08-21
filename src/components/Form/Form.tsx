import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css'


export const Form: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<string>('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_tozi189', 'template_22rflle', form.current, 'pe4bIpoOGcgy3B-4v')
        .then(
          () => {
            setMessage('Email sent successfully!');
          },
          (error) => {
            setMessage(`Failed to send email: ${error.text}`);
          },
        );
    }
  };

  return (
    <div className="form-container">
<form ref={form} onSubmit={sendEmail} className='form '>
  <div className="form-group">
  <label htmlFor="user_name">Name</label>
  <input type="text" id="user_name" name="to_name" required/>
  </div>

<div className="form-group">
<label htmlFor="user_email">Email</label>
<input type="email" id="user_email" name="from_name" required />
</div>
<div className="form-group">
<label htmlFor="message">Message</label>
<textarea id="message" name="message" required />
</div>
<input type="submit" value="Send" className="form-submit-btn" />

{message && <div className='message'>
  <p>{message}</p>
  </div>}


</form>
    </div>
    
  );
};
