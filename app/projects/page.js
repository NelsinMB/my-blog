import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: "",
    description: "",
    link: "#"
  },
  {
    id: 2,
    title: "",
    description: "",
    link: "#"
  },

  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="container">
      <div className={styles.projectsContent}>
        <h1>Projects</h1>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

