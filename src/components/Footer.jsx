import { NavLink } from "react-router";
import instaIcon from "../assets/insta-icon.svg";

export default function Footer() {
  return (
    <footer>
      <NavLink to="Instagram.com">
        <img src={instaIcon} alt="Instagram" />
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </footer>
  );
}
