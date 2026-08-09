import { replaceMongoIdInObject } from "@/lib/convertData";
import { User } from "@/model/user-model";

export async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ email: email }).lean();
    return replaceMongoIdInObject(user);
  } catch (error) {
    console.log(error);
  }
}
