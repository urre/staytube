import { NavLink } from 'react-router'
import button from './Button.module.css'
import styles from './Header.module.css'

const navClass = ({ isActive }) =>
  isActive ? `${button.button} ${button.active}` : button.button

const Header = () => (
  <header className={styles.header}>
    <h1>
      <NavLink to="/">Staytu.be</NavLink>
    </h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/" end className={navClass}>
            Concerts
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" end className={navClass}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
