"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Parallel Dashboard", href: "/parallel-dashboard" },
  { label: "Internalization", href: "/internalization" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-x-4">
      {navItems?.map((item) => {
        const isActive = pathname === item.href || pathname === `/en${item.href}` || (item.href === "/" && pathname === "/en");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-1 rounded-md text-sm transition-colors
              ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}
            `}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;
