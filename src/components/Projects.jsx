import { useState, useEffect } from "react";

// Pull the file ID out of a Google Drive share link
function getDriveId(url) {
  const m =
    url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) ||
    url.match(/drive\.google\.com\/(?:open|uc)\?.*id=([\w-]+)/);
  return m ? m[1] : null;
}

// Drive image links become a direct image URL; other URLs pass through
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
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>

            {project.video && <VideoPlayer src={project.video} />}

            {project.images?.length > 0 && (
              <div className="project-images">
                {project.images.map((img) => (
                  <img
                    key={img}
                    src={imageSrc(img)}
                    alt={project.title}
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            <p>{project.description}</p>
            <div className="stack">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <a href={project.github}>GitHub →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;