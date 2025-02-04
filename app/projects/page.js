import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One. This project involved innovative design and thoughtful development.",
    link: "#"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two. This project focused on usability and modern aesthetics.",
    link: "#"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three. An exploration into minimalism and interactive design.",
    link: "#"
  }
  // Add more projects as needed
];

function Projects() {
  return (
    <section className={styles.projects}>
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

export default Projects;
