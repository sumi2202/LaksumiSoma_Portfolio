const education = [
  {
    school: "Seneca Polytechnic",
    degree: "Ontario Graduate Certificate --- Artificial Intelligence",
    dates: "2026 - 2027",
  },
  {
    school: "Ontario Tech University",
    degree: "Bachelor of Engineering --- Software Engineering",
    dates: "2020 - 2025",
  }
];

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div id="education-container">
        {education.map((item) => (
          <article key={item.school + item.dates} className="education-card">
            <div className="education-header">
              <h3>{item.school}</h3>
              <span className="education-dates">{item.dates}</span>
            </div>
            <p className="education-degree">{item.degree}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;