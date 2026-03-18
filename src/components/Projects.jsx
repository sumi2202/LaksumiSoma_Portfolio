const projects = [
    {
        title: "Design and Development of Comprehensive Security Testing – Automated Penetration Testing Desktop Application (Top 5 Finalist out of 250 ECSE Capstone Students)",
        description: "Automated the most tedious parts of security testing and built a desktop app that scans for SQL injection and XSS vulnerabilities and delivers a full report in under 60 seconds.",
        stack: ["Kali Linux", "Python", "Flask", "Electron.js", "MongoDB Atlas", "Socket.IO", "Docker", "Playwright", "SQLMap", "XSSer"],
        github: "github"
    },
    {
        title: "Tesla Stock Trading Simulation – AI/Machine Learning Model",
        description: "Trained an XGBoost model to predict stock movements and built decision logic around it — achieving 95% accuracy and turning a $10K simulated portfolio into a working trading strategy.",
        stack: ["Python","XGBoost","scikit-learn","Pandas", "NumPy","yFinance API", "Joblib", "Google Colab"],
        github: "github"
    },
    {
        title: "Food Delivery Application",
        description: "A fully functional Android food delivery app built from scratch — live map tracking, dynamic menus, cart, reviews, and authentication, all in Java",
        stack: ["Java","Android Studio","SQLite","Google Maps SDK", "XML"],
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