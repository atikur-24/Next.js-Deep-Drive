import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { isDateInbetween, replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-util";

// find booking
async function findBooking(hotelId, checkin, checkout) {
  try {
    const matchesBooking = await bookingModel.find({ hotelId: hotelId.toString() }).lean();

    const found = matchesBooking.find((match) => {
      return isDateInbetween(checkin, match.checkin, match.checkout) || isDateInbetween(checkout, match.checkin, match.checkout);
    });

    return found;
  } catch (error) {
    console.log(error);
  }
}

// Get all hotels data
export async function getAllHotels(destination, checkin, checkout) {
  try {
    const regex = new RegExp(destination, "i");

    const hotelsByDestination = await hotelModel
      .find({ city: { $regex: regex } })
      .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"])
      .lean();

    let allHotels = hotelsByDestination;

    if (checkin && checkout) {
      allHotels = await Promise.all(
        allHotels.map(async (hotel) => {
          const found = await findBooking(hotel._id, checkin, checkout);
          if (found) {
            hotel["isBooked"] = true;
          } else {
            hotel["isBooked"] = false;
          }
          return hotel;
        }),
      ).catch((err) => console.log(err));
    }

    return replaceMongoIdInArray(allHotels);
  } catch (error) {
    console.log(error);
  }
}

// get hotel details
export async function getHotelById(hotelId, checkin, checkout) {
  try {
    const hotel = await hotelModel.findById(hotelId).lean();

    if (checkin && checkout) {
      const found = await findBooking(hotel._id, checkin, checkout);
      if (found) {
        hotel["isBooked"] = true;
      } else {
        hotel["isBooked"] = false;
      }
    }
    return replaceMongoIdInObject(hotel);
  } catch (error) {
    console.log(error);
  }
}

// get rating for a hotel
export async function getRatingsForAHotel(hotelId) {
  try {
    const ratings = await ratingModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(ratings);
  } catch (error) {
    console.log(error);
  }
}

// get reviews for a hotel
export async function getReviewsForAHotel(hotelId) {
  try {
    const reviews = await reviewModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(reviews);
  } catch (error) {
    console.log(error);
  }
}
