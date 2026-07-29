"use client";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: `${process.env.FRONTEND_URL}/login` });
      }}
    >
      Sign Out
    </button>
  );
};

export default Logout;
