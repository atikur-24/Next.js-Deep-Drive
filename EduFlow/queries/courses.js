import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/module.model";
import { Testimonial } from "@/model/testimonial-model";
import { User } from "@/model/user-model";
import { getEnrollmentsForCourse } from "./enrollments";
import { getTestimonialsForCourse } from "./testimonials";

// get all courses with populated fields and return them with replaced MongoDB IDs
export async function getCourseList() {
  try {
    const courses = await Course.find({})
      .select(["title", "subtitle", "thumbnail", "modules", "price", "category", "instructor"])
      .populate({
        path: "category",
        model: Category,
      })
      .populate({
        path: "instructor",
        model: User,
      })
      .populate({
        path: "testimonials",
        model: Testimonial,
      })
      .populate({
        path: "modules",
        model: Module,
      })
      .lean();
    return replaceMongoIdInArray(courses);
  } catch (error) {
    console.log(error);
  }
}

// get course details by ID with populated fields and return it with replaced MongoDB IDs
export async function getCourseDetails(id) {
  try {
    const course = await Course.findById(id)
      .populate({
        path: "category",
        model: Category,
      })
      .populate({
        path: "instructor",
        model: User,
      })
      .populate({
        path: "testimonials",
        model: Testimonial,
        populate: {
          path: "user",
          model: User,
        },
      })
      .populate({
        path: "modules",
        model: Module,
      })
      .lean();

    return replaceMongoIdInObject(course);
  } catch (error) {
    console.log(error);
  }
}

// get course details by instructor ID with populated fields and return it with replaced MongoDB IDs
export async function getCourseDetailsByInstructor(instructorId) {
  try {
    const courses = await Course.find({ instructor: instructorId }).lean();

    const enrollments = await Promise.all(
      courses.map(async (course) => {
        const enrollment = await getEnrollmentsForCourse(course._id.toString());
        return enrollment;
      }),
    );

    const groupedByCourses = Object.groupBy(enrollments.flat(), ({ course }) => course);

    const totalRevenue = courses.reduce((acc, course) => {
      return acc + groupedByCourses[course._id].length * course.price;
    }, 0);

    const totalEnrollments = enrollments.reduce(function (acc, obj) {
      return acc + obj.length;
    }, 0);

    const testimonials = await Promise.all(
      courses.map(async (course) => {
        const testimonial = await getTestimonialsForCourse(course._id.toString());
        return testimonial;
      }),
    );

    const totalTestimonials = testimonials.flat();
    const avgRating =
      totalTestimonials.reduce(function (acc, obj) {
        return acc + obj.rating;
      }, 0) / totalTestimonials.length;

    return {
      courses: courses.length,
      enrollments: totalEnrollments,
      reviews: totalTestimonials.length,
      ratings: avgRating.toPrecision(2),
      revenue: totalRevenue,
    };
  } catch (error) {
    console.log(error);
  }
}
