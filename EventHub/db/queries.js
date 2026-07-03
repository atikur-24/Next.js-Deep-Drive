import { eventModel } from "@/models/event-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data.util";

async function getAllEvents() {
  try {
    const events = await eventModel.find().lean();
    return replaceMongoIdInArray(events);
  } catch (error) {
    console.log(error);
  }
}

async function getEventById(eventId) {
  try {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
  } catch (error) {
    console.log(error);
  }
}

export { getAllEvents, getEventById };
