"use server";

import { createUser, findUserByCredentials, updateInterest } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Registers a new user
async function registerUser(formData) {
  let createdUser;

  try {
    const user = Object.fromEntries(formData);
    createdUser = await createUser(user);
  } catch (error) {
    console.log(error);
    throw error;
  }

  if (createdUser) {
    redirect("/login");
  }
}

// Logs in a user
async function loginUser(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const foundUser = await findUserByCredentials(credential);
    return foundUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Updates the interest of a user for a specific event
async function updateInterestEvent(eventId, userId) {
  try {
    await updateInterest(eventId, userId);
  } catch (error) {
    console.log(error);
    throw error;
  }

  revalidatePath("/");
}

export { loginUser, registerUser, updateInterestEvent };
