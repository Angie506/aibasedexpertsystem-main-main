import { Link, useLocation } from "react-router-dom";
import styles from "../styles/HeaderFooter.module.css"; // Import module

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      {" "}
      {/* Apply CSS module */}
      <nav className={styles.navbar}>
        <Link to="/" className={location.pathname === "/" ? styles.active : ""}>
          Home
        </Link>
        <Link
          to="/forward"
          className={location.pathname === "/forward" ? styles.active : ""}
        >
          Book Picker
        </Link>
        <Link
          to="/backward"
          className={location.pathname === "/backward" ? styles.active : ""}
        >
          Book Checker
        </Link>
      </nav>
    </header>
  );
}