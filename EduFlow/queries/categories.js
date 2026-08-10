import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/model/category-model";

export async function getCategories() {
  try {
    const categories = await Category.find({}).lean();
    return replaceMongoIdInArray(categories);
  } catch (error) {
    console.log(error);
  }
}

export async function getCategoryDetails(categoryId) {
  try {
    const category = await Category.findById(categoryId).lean();
    return replaceMongoIdInObject(category);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
