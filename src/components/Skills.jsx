import { useState, useEffect } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setSkills)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (error) return <p>Couldn't load skills.</p>;

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div id="skills-container">
        {skills.map((skill) => (
          <div key={skill._id} className="skills-card">
            <h3>{skill.title}</h3>
            <div className="stack">
              {skill.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;