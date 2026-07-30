"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const languages = [
  { code: "en", language: "English", flag: "/usa.png" },
  { code: "bn", language: "Bangla", flag: "/bd.png" },
];

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [showMenu, setShowMenu] = useState(false);

  // derive current locale directly from the URL segment, don't keep it in state
  const currentLocale = pathname.split("/")[1];
  const selectedLanguage = languages.find((lang) => lang.code === currentLocale) ?? languages[0];

  const handleLanguageChange = (lang) => {
    setShowMenu(false);

    if (lang === selectedLanguage.code) return;

    // split path into segments, replace only the locale segment (index 1)
    const segments = pathname.split("/");
    segments[1] = lang;
    const newPath = segments.join("/") || "/";

    const query = searchParams.toString();
    const newUrl = query ? `${newPath}?${query}` : newPath;

    router.push(newUrl);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <button className="flex items-center gap-2" onClick={() => setShowMenu((prev) => !prev)}>
          <Image className="max-w-8" src={selectedLanguage.flag} alt={selectedLanguage.language} height={100} width={165} />
          {selectedLanguage.language}
        </button>

        {showMenu && (
          <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li key={entry.code} onClick={() => handleLanguageChange(entry.code)} className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                <Image className="max-w-8" src={entry.flag} alt={entry.language} height={100} width={165} />
                {entry.language}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
