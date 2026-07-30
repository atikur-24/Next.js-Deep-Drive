import { amenityModel } from "@/models/amenity-model";
import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotel-model";
import { ratingModel } from "@/models/rating-model";
import { reviewModel } from "@/models/review-model";
import { userModel } from "@/models/user-model";
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
export async function getAllHotels(destination, checkin, checkout, category, amenity, sortByPrice) {
  try {
    const regex = new RegExp(destination, "i");

    const hotelsByDestination = await hotelModel
      .find({ city: { $regex: regex } })
      .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory", "amenities"])
      .lean();

    let allHotels = hotelsByDestination;

    // filter for sort by price
    if (sortByPrice === "high-to-low") {
      allHotels.sort((a, b) => {
        const avgA = (a.highRate + a.lowRate) / 2;
        const avgB = (b.highRate + b.lowRate) / 2;

        return avgB - avgA;
      });
    }

    if (sortByPrice === "low-to-high") {
      allHotels.sort((a, b) => {
        const avgA = (a.highRate + a.lowRate) / 2;
        const avgB = (b.highRate + b.lowRate) / 2;

        return avgA - avgB;
      });
    }

    if (category) {
      // filter for category
      const categoriesToMatch = category.split("|");

      allHotels = allHotels.filter((hotel) => {
        return categoriesToMatch.includes(hotel.propertyCategory.toString());
      });
    }

    // filter for amenities
    if (amenity) {
      const amenitiesToMatch = amenity.split("|");

      allHotels = allHotels.filter((hotel) => {
        const hotelAmenityIds = hotel.amenities?.map((a) => a?.toString());
        return amenitiesToMatch.some((id) => hotelAmenityIds?.includes(id));
      });
    }

    // filter for chekin & checkout
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

// get user by email
export async function getUserByEmail(email) {
  try {
    const users = await userModel.find({ email }).lean();
    return replaceMongoIdInObject(users[0]);
  } catch (error) {
    console.log(error);
  }
}

// get booking by user
export async function getBookingsByUser(userId) {
  try {
    const bookings = await bookingModel.find({ userId: userId }).lean();
    return replaceMongoIdInArray(bookings);
  } catch (error) {
    console.log(error);
  }
}

// get user by email
export async function getAllAmenities() {
  try {
    const amenities = await amenityModel.find().select(["_id", "name"]).lean();
    return replaceMongoIdInArray(amenities);
  } catch (error) {
    console.log(error);
  }
}
