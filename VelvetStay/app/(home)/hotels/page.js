import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/filter/Filter";
import Search from "@/components/search/Search";

const refineQuery = (query) => {
  const decodedCategory = decodeURI(query);
  if (decodedCategory === "undefined" || decodedCategory === "null") {
    return "";
  }
  return decodedCategory;
};

const HotelListPage = ({ searchParams: { destination, checkin, checkout, category, amenity, sort } }) => {
  return (
    <>
      <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
        <div className="container items-center py-12 ">
          <Search fromList={true} destination={destination} checkin={checkin} checkout={checkout} />
        </div>
      </section>
      <section className="py-12">
        <div className="container grid grid-cols-12">
          <Filter />
          <HotelList destination={destination} checkin={checkin} checkout={checkout} category={refineQuery(category)} amenity={refineQuery(amenity)} sortByPrice={refineQuery(sort)} />
        </div>
      </section>
    </>
  );
};

export default HotelListPage;
