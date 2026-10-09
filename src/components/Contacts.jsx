const contacts = [
  {
    label: "Email",
    value: "laksumi.soma@gmail.com",
    href: "mailto:laksumi.soma@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Laksumi Soma",
    href: "https://www.linkedin.com/in/laksumi-soma-8207051b2",
  },
  {
    label: "GitHub",
    value: "github.com/sumi2202",
    href: "https://github.com/sumi2202",
  },
];

function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div id="contact-container">
        <p>
          I'm always happy to talk about new opportunities, interesting
          projects, or just swap ideas. The best way to reach me is below.
        </p>
        <div className="contact-links">
          {contacts.map((c) => (
            <a
              key={c.label}
              className="contact-card"
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
            >
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;