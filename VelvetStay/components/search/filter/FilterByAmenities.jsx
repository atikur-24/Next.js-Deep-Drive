"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByAmenities = ({ amenities }) => {
  const [query, setQuery] = useState([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const checked = event.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filtered = query.filter((item) => item !== name);
      setQuery(filtered);
    }
  };

  useEffect(() => {
    const amenity = params.get("amenity");

    if (amenity) {
      const decodedCategory = decodeURI(amenity);
      const queryInCategory = decodedCategory.split("|");
      setQuery(queryInCategory);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("amenity", encodeURI(query.join("|")));
    } else {
      params.delete("amenity");
    }
    replace(`${pathname}?${params}`);
  }, [query]);

  return (
    <div>
      <h3 className="font-bold text-lg">Amenities</h3>
      <form action="" className="flex flex-col gap-2 mt-2">
        {amenities?.map((amenity) => {
          const formattedName = amenity.name.toLowerCase().replace(/\s+/g, "_");

          return (
            <label key={amenity.id} htmlFor={amenity.id}>
              <input type="checkbox" name={amenity.id} id={amenity.id} checked={query.includes(amenity.id)} onChange={handleChange} />
              {amenity.name}
            </label>
          );
        })}
      </form>
    </div>
  );
};

export default FilterByAmenities;
