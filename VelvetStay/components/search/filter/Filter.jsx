import { getAllAmenities } from "@/db/queries";
import SortHotel from "../../sort/SortHotel";

import FilterByAmenities from "./FilterByAmenities";
import FilterByPriceRange from "./FilterByPriceRange";
import FilterByStarCategory from "./FilterByStarCategory";

const Filter = async () => {
  const amenities = await getAllAmenities();

  return (
    <>
      <div className="col-span-3 space-y-4">
        <SortHotel />

        <FilterByPriceRange />
        <FilterByStarCategory />
        <FilterByAmenities amenities={amenities} />
      </div>
    </>
  );
};

export default Filter;
