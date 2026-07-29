import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Auth - Velvet Stay",
};

export default function AuthLayout({ children }) {
  return (
    <>
      <Navbar sideMenu={false} />
      <main>{children}</main>
    </>
  );
}
