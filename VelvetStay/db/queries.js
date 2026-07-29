import { hotelModel } from "@/models/hotel-model";
import { replaceMongoIdInArray } from "@/utils/data-util";

// Get all hotels data
export async function getAllHotels() {
  try {
    const hotels = await hotelModel.find().lean();
    return replaceMongoIdInArray(hotels);
  } catch (error) {
    console.log(error);
  }
}
