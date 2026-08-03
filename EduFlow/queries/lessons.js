import { replaceMongoIdInObject } from "@/lib/convertData";
import { Lesson } from "@/model/lesson.model";

export async function getLesson(lessonId) {
  try {
    const lesson = await Lesson.findById(lessonId).lean();
    return replaceMongoIdInObject(lesson);
  } catch (error) {
    console.log(error);
  }
}
