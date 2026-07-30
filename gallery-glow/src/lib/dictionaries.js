import "server-only";

// const dictionaries = {
//   en: () => import("../dictionaries/en.json").then((module) => module.default),
//   bn: () => import("../dictionaries/bn.json").then((module) => module.default),
// };

// export const getDictionary = async (locale) => dictionaries[locale]();

const dictionaries = {
  en: {
    common: () => import("../dictionaries/en/common.json").then((m) => m.default),
    about: () => import("../dictionaries/en/about.json").then((m) => m.default),
  },
  bn: {
    common: () => import("../dictionaries/bn/common.json").then((m) => m.default),
    about: () => import("../dictionaries/bn/about.json").then((m) => m.default),
  },
};

/**
 * @param {string} locale - "en" | "bn"
 * @param {string[]} namespaces - e.g. ["common", "about"]
 */
export const getDictionary = async (locale, namespaces = ["common"]) => {
  const loaders = dictionaries[locale] ?? dictionaries.en;

  const values = await Promise.all(namespaces.map((ns) => (loaders[ns] ? loaders[ns]() : Promise.resolve({}))));

  return namespaces.reduce((acc, ns, i) => {
    acc[ns] = values[i];
    return acc;
  }, {});
};
