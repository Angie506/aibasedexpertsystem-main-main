import styles from "../styles/HeaderFooter.module.css"; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {" "}
      {/* Apply CSS module */}
      <p>© {new Date().getFullYear()} Book Club. The Pumigers! .</p>
    </footer>
  );
}