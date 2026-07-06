import { eventModel } from "@/models/event-model";
import { userModel } from "@/models/user-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data.util";
import mongoose from "mongoose";

// Get all events from the database, optionally filtered by a query
async function getAllEvents(query) {
  try {
    let allEvents = [];
    if (query) {
      const regex = new RegExp(query, "i");
      allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
    } else {
      allEvents = await eventModel.find().lean();
    }
    return replaceMongoIdInArray(allEvents);
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

// Update the interest of a user for a specific event in the database
async function updateInterest(eventId, userId) {
  try {
    const event = await eventModel.findById(eventId);

    if (event) {
      const foundInterestedUser = event.interested_ids.find((id) => id.toString() === userId);

      if (foundInterestedUser) {
        event.interested_ids.pull(new mongoose.Types.ObjectId(userId));
      } else {
        event.interested_ids.push(new mongoose.Types.ObjectId(userId));
      }

      event.save();
    }
  } catch (error) {
    console.log(error);
  }
}

// Update the going status of a user for a specific event in the database
async function updateGoing(eventId, userId) {
  try {
    const event = await eventModel.findById(eventId);
    event.going_ids.push(new mongoose.Types.ObjectId(userId));
    event.save();
  } catch (error) {
    console.log(error);
  }
}

export { createUser, findUserByCredentials, getAllEvents, getEventById, updateGoing, updateInterest };
