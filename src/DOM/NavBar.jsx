import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 

const NavBar = () => {
    return(
      <nav>
        <ul className={styles.lista}>
          <li className={styles.item}>
            <Link to="/" className={styles.link}>Inicio</Link>
            <Link to="/moda" className={styles.link}>Moda</Link>
            <Link to="/contacto" className={styles.link}>Contacto</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
