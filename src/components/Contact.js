import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const validate = () => {
    if (!name.trim()) return 'Name is required';
    if (!email.trim()) return 'Email is required';
    // simple email regex
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(email)) return 'Email is invalid';
    if (!message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      // Use Formspree endpoint. Set REACT_APP_FORMSPREE_ENDPOINT in .env or replace the placeholder.
      const FORMSPREE = process.env.REACT_APP_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mzdzpraz';
      await axios.post(FORMSPREE, { name, email, message }, { headers: { Accept: 'application/json' } });
      setSuccess('Message sent — thank you!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <div className="form-error">{error}</div>}
          {success && <div className="form-success">{success}</div>}
          <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Name" />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
          <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message"></textarea>
          <button type="submit" className="btn" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;