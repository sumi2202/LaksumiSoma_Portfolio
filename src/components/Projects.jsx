const projects = [
    {
        title: "Design and Development of Comprehensive Security Testing – Automated Penetration Testing Desktop Application (Top 5 Finalist out of 250 ECSE Capstone Students)",
        description: "Designed and developed a full-stack security testing application that performs automated vulnerability analysis and reports results in real time within 60 seconds. Integrated AES-256–encrypted MongoDB storage and real-time Socket.IO messaging to support secure data management and live vulnerability feedback. Configured Kali Linux OS drivers and dependencies to develop and test scripts that check for SQL Injection and Cross-Site Scripting. Automated penetration testing workflows in a Kali Linux environment, improving testing coverage and execution speed by 80% through scripting and orchestration.",
        stack: [" Kali Linux", "Python", "Flask", "Electron.js", "MongoDB Atlas", "Socket.IO", "Docker", "Playwright", "SQLMap", "XSSer"],
        github: "github"
    },
    {
        title: "Tesla Stock Trading Simulation – AI/Machine Learning Model",
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
            <div id="project-container">
            {projects.map((project, index) => (
                <div key={project.title} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="stack">
                        {project.stack.map((tech, index) => (
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