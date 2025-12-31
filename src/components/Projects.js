import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get('https://api.github.com/users/omar-sami-oss/repos?per_page=100&sort=updated');
        setRepos(res.data);
      } catch (err) {
        setError('Failed to load projects from GitHub');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        {loading && <p>Loading projects...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && (
          <div className="projects-grid">
            {repos.length === 0 && <p>No public projects found.</p>}
            {repos.map(repo => (
              <div key={repo.id} className="project-card">
                <h3>{repo.name}</h3>
                <p>{repo.description || 'No description provided.'}</p>
                <div className="project-meta">
                  <span>{repo.language || '—'}</span>
                  <span>★ {repo.stargazers_count}</span>
                </div>
                <a className="project-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;