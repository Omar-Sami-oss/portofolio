import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function BlogPostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://dev.to/api/articles/${id}`);
        const data = res.data;
        setPost({
          id: data.id,
          title: data.title,
          date: data.readable_publish_date || (data.published_at ? data.published_at.slice(0,10) : ''),
          body: data.body_html || data.body_markdown || ''
        });
      } catch (err) {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="container"><p>Loading post...</p></div>;
  if (error) return <div className="container"><p>{error}</p></div>;
  if (!post) return <div className="container"><p>Post not found.</p></div>;

  return (
    <section className="container">
      <Link to="/blog">← Back to Blog</Link>
      <h2>{post.title}</h2>
      <div className="post-meta">{post.date}</div>
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
    </section>
  );
}

export default BlogPostDetail;
