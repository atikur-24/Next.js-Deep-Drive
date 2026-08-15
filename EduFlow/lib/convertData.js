export const replaceMongoIdInArray = (array) => {
  const mappedArray = array.map(({ _id, ...reset }) => {
    return {
      id: _id.toString(),
      ...reset,
    };
  });

  return mappedArray;
};

export const replaceMongoIdInObject = (obj) => {
  if (!obj) return null;

  const { _id, ...rest } = obj;

  const updatedObj = {
    id: _id.toString(),
    ...rest,
  };

  return updatedObj;
};

export const getSlug = (title) => {
  if (!title) return null;

  const slug = title
    .toLowerCase()
    .replace(/ /g, -"")
    .replace(/[^\w-]+/g, "");

  return slug;
};
