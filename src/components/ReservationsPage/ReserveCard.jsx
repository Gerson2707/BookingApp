const ReserveCard = ({ reserve, setReserveSelect, deleteBooking }) => {
  const checkIn = new Date(reserve.checkIn)
  const checkOut = new Date(reserve.checkOut)

  const daysReserv = ((checkOut - checkIn)/(1000 * 60 * 60 * 24))

  const handleReview = () => {
    const obj = {
      ...reserve,
      daysReserv,
      subtotal: daysReserv + reserve.hotel.price
    }
    setReserveSelect(obj)
  }

  const handleDelete = () => {
    const url = `https://hotels-api.academlo.tech/reviews/${reserve.id}`
    deleteBooking(url, reserve.id)
  }


  return (
    <article>
      <header>
        <img src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>
          {reserve.hotel.city.name}, {reserve.hotel.city.country}
        </div>
        <div onClick={handleReview}>Rate and comment this visit...</div>
      </section>
      <section>
        <ul>
          <li>
            <span>Reservation Days </span>
            <span>{daysReserv}</span>
          </li>
          <li>
            <span>subtotal Price </span>
            <span>{daysReserv + reserve.hotel.price}</span>
          </li>
        </ul>
      </section>
      <footer>
        <button onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
      </footer>
    </article>
  );
};
export default ReserveCard;
