import { replaceMongoIdInObject } from "@/lib/convertData";
import { User } from "@/model/user-model";
import bcrypt from "bcryptjs";

export async function getUserByEmail(email) {
  try {
    const user = await User.findOne({ email: email }).select("-password").lean();
    return replaceMongoIdInObject(user);
  } catch (error) {
    console.log(error);
  }
}

export async function getUserDetails(userId) {
  try {
    const user = await User.findById(userId).select("-password").lean();
    return replaceMongoIdInObject(user);
  } catch (error) {
    console.log(error);
  }
}

export async function validatePassword(email, password) {
  try {
    const user = await getUserByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  } catch (error) {
    console.log(error);
  }
}
