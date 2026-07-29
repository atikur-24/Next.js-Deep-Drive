import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Home - Velvet Stay",
};

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar sideMenu={true} />
      <main>{children}</main>
    </>
  );
}
