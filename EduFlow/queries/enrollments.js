import { Enrollment } from "@/model/enrollment-model";

import { replaceMongoIdInArray } from "@/lib/convertData";

export async function getEnrollmentsForCourse(courseId) {
  try {
    const enrollments = await Enrollment.find({ course: courseId }).lean();
    return replaceMongoIdInArray(enrollments);
  } catch (error) {
    console.log(error);
  }
}
