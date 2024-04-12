import { useNavigate } from "react-router-dom"
import './styles/HotelCard.css'

const HotelCard = ( {hotel} ) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)
    }
  return (
    <article className="card">
        <header className="card__header">
            <img className="card__img" src={hotel.images[0].url} alt="" />
        </header>
            <section className="hotel__description">
                <h2 className="hotel__name">{hotel.name}</h2>
                <p className="hotel__rating" >{hotel.rating}</p>
                <span className="hotel__ubication">{hotel.city.name}, {hotel.city.country}</span>
                <div className="hotel__price">$ {hotel.price}</div>
            </section>
            <footer>
                <button className="btn__seeMore" onClick={handleClick}>See more...</button>
            </footer>
    </article>
  )
}
export default HotelCard