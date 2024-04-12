import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { Map, Marker, Overlay } from "pigeon-maps";
import OtherHotels from "../components/HotelsIdPage/OtherHotels";
import FormReserve from "../components/HotelsIdPage/FormReserve";
import SliderImgs from "../components/HotelsIdPage/SliderImgs";
const HotelsIdPages = () => {
  const { id } = useParams();

  const url = `https://hotels-api.academlo.tech/hotels/${id}`;

  const [hotel, getHotel] = useFetch(url);

  useEffect(() => {
    getHotel();
  }, [id]);



  return (
    <div>
      <h2>{hotel?.name}</h2>
      <h3>RATING - {hotel?.rating}</h3>
      <SliderImgs hotel={hotel} />
      <div>
        {hotel && 
          <Map
            height={200}
            defaultCenter={[+hotel?.lat, +hotel?.lon]}
            zoom={15}
            maxZoom={16}
            minZoom={10}
          >
           <Overlay anchor={[+hotel?.lat, +hotel?.lon]}>
            <img src="/hotel-icon.png" width={40} alt="" />
           </Overlay>
          </Map>
        }
      </div>
      <section>
        <h3>
          {hotel?.city.name}, {hotel?.city.country}
        </h3>
        <p>
          <i className="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </p>
        <p>{hotel?.description}</p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormReserve hotelId={hotel?.id} />
        : <h4>If you want to make a reservation, please <Link to='/login'>login</Link> </h4>
      }
      <OtherHotels hotel={hotel} />
    </div>
  );
};
export default HotelsIdPages;
