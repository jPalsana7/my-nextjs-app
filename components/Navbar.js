import Link from "next/link";
import { Dropdown } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <Link className="navbar-button" href={"/"}>
          Home
        </Link>
        <Link className="navbar-button" href={"/about"}>
          About
        </Link>
        <Link className="navbar-button" href={"/product"}>
          Product
        </Link>

        <Link className="navbar-button" href={"/contact"}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
