import { useState, useEffect } from "react";

function getDriveId(url) {
  const m =
    url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) ||
    url.match(/drive\.google\.com\/(?:open|uc)\?.*id=([\w-]+)/);
  return m ? m[1] : null;
}

function imageSrc(url) {
  const id = getDriveId(url);
  return id ? `https://lh3.googleusercontent.com/d/${id}` : url;
}

function VideoPlayer({ src }) {
  const driveId = getDriveId(src);
  if (driveId) {
    return (
      <iframe
        src={`https://drive.google.com/file/d/${driveId}/preview`}
        title="Project demo"
        allow="autoplay"
        allowFullScreen
        className="project-video"
      />
    );
  }

  const yt = src.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${yt[1]}`}
        title="Project demo"
        allowFullScreen
        className="project-video"
      />
    );
  }

  return <video src={src} controls preload="metadata" className="project-video" />;
}

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setProjects)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Couldn't load projects.</p>;

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div id="project-container">
        {projects.map((project) => (
          <article key={project._id} className="project-card">
            {project.video && <VideoPlayer src={project.video} />}

            {project.images?.length > 0 && (
              <div className="project-images">
                {project.images.map((img) => (
                  <img key={img} src={imageSrc(img)} alt={project.title} loading="lazy" />
                ))}
              </div>
            )}

            <div className="project-body">
              {project.badge && <span className="project-badge">★ {project.badge}</span>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;