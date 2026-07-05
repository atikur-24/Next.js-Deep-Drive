import { eventModel } from "@/models/event-model";
import { userModel } from "@/models/user-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data.util";

// Get all events from the database
async function getAllEvents() {
  try {
    const events = await eventModel.find().lean();
    return replaceMongoIdInArray(events);
  } catch (error) {
    console.log(error);
  }
}

// Get a single event by its ID from the database
async function getEventById(eventId) {
  try {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
  } catch (error) {
    console.log(error);
  }
}

// Create a new user in the database
async function createUser(user) {
  try {
    const createdUser = await userModel.create(user);
    return createdUser;
  } catch (error) {
    console.log(error);
  }
}

// Find a user by their credentials (email and password) in the database
async function findUserByCredentials(credential) {
  try {
    const user = await userModel.findOne(credential).lean();
    if (user) {
      return replaceMongoIdInObject(user);
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

export { createUser, findUserByCredentials, getAllEvents, getEventById };
