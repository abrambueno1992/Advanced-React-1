import Link from "next/link";
import NavStyles from "./styles/NavStyles"
const Nav = () => {
  return (
    <NavStyles>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </NavStyles>
  );
};
export default Nav