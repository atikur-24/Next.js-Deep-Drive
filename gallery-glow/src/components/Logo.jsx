import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.webp";

const Logo = () => {
  return (
    <Link href="/">
      <Image className="max-w-[100px] md:max-w-[165px]" src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
