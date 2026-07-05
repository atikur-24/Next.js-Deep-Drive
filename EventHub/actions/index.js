"use server";

import { createUser, findUserByCredentials } from "@/db/queries";
import { redirect } from "next/navigation";

async function registerUser(formData) {
  let createdUser;

  try {
    const user = Object.fromEntries(formData);
    createdUser = await createUser(user);
  } catch (error) {
    console.error(error);
    return;
  }

  if (createdUser) {
    redirect("/login");
  }
}

async function loginUser(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const foundUser = await findUserByCredentials(credential);
    return foundUser;
  } catch (error) {
    console.log(error);
  }
}

export { loginUser, registerUser };
