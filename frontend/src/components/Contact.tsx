import React, { useState } from 'react';

function Contact() {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      recipient,
      subject,
      body,
    };

    try {
      const response = await fetch('http://52.23.229.23/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error(response);
        console.error(response.ok);
        console.error(response.json());
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={recipient} onChange={e => setRecipient(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" value={subject} onChange={e => setSubject(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows={5} value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;