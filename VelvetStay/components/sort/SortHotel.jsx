"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SortHotel = () => {
  const [sort, setSort] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  function handleChange(e) {
    setSort(e.target.value);
  }

  useEffect(() => {
    const sort = params.get("sort");
    if (sort) {
      setSort(decodeURI(sort));
    }
  }, []);

  useEffect(() => {
    if (sort) {
      params.set("sort", encodeURI(sort));
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params}`);
  }, [sort]);

  return (
    <div>
      <h3 className="font-bold text-lg">Sort By</h3>

      <form className="flex flex-col gap-2 mt-2">
        <label htmlFor="highToLow">
          <input id="highToLow" type="radio" name="sortOrder" value="high-to-low" checked={sort === "high-to-low"} onChange={handleChange} className="mr-1.5" />
          Price High to Low
        </label>

        <label htmlFor="lowToHigh">
          <input id="lowToHigh" type="radio" name="sortOrder" value="low-to-high" checked={sort === "low-to-high"} onChange={handleChange} className="mr-1.5" />
          Price Low to High
        </label>
      </form>
    </div>
  );
};

export default SortHotel;
