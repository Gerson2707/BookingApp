import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"

const ReservationPage = () => {

  const [reserveSelect, setReserveSelect] = useState()

  const [ bookings, getBookings,, deleteBooking ] = useCrud()


  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    getBookings(url)
  }, [])


  return (
    <section>
      <FormReviews 
      reserveSelect={reserveSelect}
      setReserveSelect={setReserveSelect} />
      <h2>Reservations</h2>
      <div>
        {
          bookings?.map(reserve => (
            <ReserveCard key={reserve.id} reserve={reserve} setReserveSelect={setReserveSelect} deleteBooking={deleteBooking} />
          ))
        }
      </div>
    </section>
  )
}
export default ReservationPage