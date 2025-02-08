import styles from '../app/styles/globals.css'
function Footer() {
    return (
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Nelsin Martin-Burnett. All rights reserved.</p>
      </footer>
    );
  }
  
  export default Footer;
  