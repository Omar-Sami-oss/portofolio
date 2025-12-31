import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from '../components/BlogPost';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://dev.to/api/articles?per_page=8');
        const mapped = res.data.map(p => ({
          id: p.id,
          title: p.title,
          date: p.readable_publish_date || (p.published_at ? p.published_at.slice(0,10) : ''),
          excerpt: p.description || (p.body_markdown ? p.body_markdown.slice(0,160) + '...' : '')
        }));
        setPosts(mapped);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="blog container">
      <h2>Blog</h2>
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="posts">
          {posts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Blog;
