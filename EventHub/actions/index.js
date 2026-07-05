"use server";

import EmailTemplate from "@/components/payments/EmailTemplate";
import { createUser, findUserByCredentials, getEventById, updateGoing, updateInterest } from "@/db/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

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

// Updates the going status of a user for a specific event and sends a confirmation email
async function updateGoingEvent(eventId, user) {
  try {
    await updateGoing(eventId, user?.id);
    await sendEmail(eventId, user);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Sends a confirmation email to the user after they have been marked as going for an event
async function sendEmail(eventId, user) {
  try {
    const event = await getEventById(eventId);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here.`;
    const sent = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: user?.email,
      subject: "Successfully Registered for the event!",
      react: EmailTemplate({ message }),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { loginUser, registerUser, sendEmail, updateGoingEvent, updateInterestEvent };
