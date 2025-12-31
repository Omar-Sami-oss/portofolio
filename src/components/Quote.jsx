import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quote.css';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data.content);
        setAuthor(response.data.author);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch quote');
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) return <div className="quote">Loading...</div>;
  if (error) return <div className="quote">{error}</div>;

  return (
    <div className="quote">
      <blockquote>"{quote}"</blockquote>
      <cite>- {author}</cite>
    </div>
  );
}

export default Quote;