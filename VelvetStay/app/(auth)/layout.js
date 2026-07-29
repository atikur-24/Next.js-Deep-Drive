import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Auth - Velvet Stay",
};

export default async function AuthLayout({ children }) {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <>
      <Navbar sideMenu={false} />
      <main>{children}</main>
    </>
  );
}
