import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: "Giraph",
    description: "A toolkit to facililate the exploration of graph theory.",
    link: "#"
  },
  {
    id: 2,
    title: "Unnamed note-taking app",
    description: "A note-taking app composed of a set of features I wish note-taking apps had.",
    link: "#"
  },

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
