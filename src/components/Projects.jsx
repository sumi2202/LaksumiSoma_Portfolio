const projects = [
    {
        title: "Capstone",
        description: "capstone project",
        stack: ["python","kali","flask","mongodb"],
        github: "github"
    },
    {
        title: "Capstone",
        description: "capstone project",
        stack: ["python","kali","flask","mongodb"],
        github: "github"
    },
    {
        title: "Capstone",
        description: "capstone project",
        stack: ["python","kali","flask","mongodb"],
        github: "github"
    }
]
function Projects() {
    return(
        <section id="projects">
            <h2>My Projects</h2>
            {projects.map((project) => (
                <div key={project.title} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="stack">
                        {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                        ))}
                    </div>
                    <a href={project.github}>GitHub →</a>
                </div>
            ))}

        </section>
    );
}

export default Projects;