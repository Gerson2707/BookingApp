import { useSelector } from "react-redux";
import HotelCard from "../components/HomePage/HotelCard";
import "./styles/HomePage.css";
import { useRef, useState } from "react";
import CategoryFilter from "../components/HomePage/CategoryFilter";
import PriceFilter from "../components/HomePage/PriceFilter";
const HomePage = () => {
  const hotels = useSelector((states) => states.hotels);

  const [inputName, setInputName] = useState("");

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const inputValue = useRef();

  const handleChange = () => {
    setInputName(inputValue.current.value);
  };

  const cbfilter = (hotelInfo) => {
    //Filter by name
    const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim());
    //Filter by price
    const price = Number(hotelInfo.price);
    const filterPrice = price >= fromTo.from && price <= fromTo.to;
    return filterName && filterPrice;
  };

  return (
    <div>
      <div>
        <input
          ref={inputValue}
          value={inputName}
          type="text"
          onChange={handleChange}
          className="input__search"
        />
        <button className="button__search" >Search</button>
      </div>
      <aside>
        <h3>Filters</h3>
        <PriceFilter setFromTo={setFromTo} />
        <CategoryFilter />
      </aside>
      <div className="cards">
        {hotels?.filter(cbfilter).map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
