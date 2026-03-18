const skills_set = [
    {
        title: "Languages",
        stack: ["Python", "JavaScript", "Java", "HTML", "CSS"]
    },
    {
        title: "Artificial Intelligence/Machine Learning",
        stack: ["Large Language Models (LLMs)","Generative AI","TensorFlow","PyTorch","XGBoost"]
    },
    {
        title: "Frameworks",
        stack: ["React","Flutter","Flask","Spring Boot"]
    }
]
function Skills() {
    return(
        <section id="skills">
            <h2>My Skills</h2>
            <div id="skills-container">
            {skills_set.map((skill, index) => (
                <div key={skill.title} className="skills-card">
                    <h3>{skill.title}</h3>
                    <div className="stack">
                        {skill.stack.map((tech, index) => (
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