import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />
        <NavItems />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
