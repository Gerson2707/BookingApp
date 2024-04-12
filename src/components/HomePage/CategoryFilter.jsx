import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsThunk } from '../../store/states/hotels.slice'
import { useDispatch } from 'react-redux'
const CategoryFilter = () => {

    const url = 'https://hotels-api.academlo.tech/cities'
   const [cities, getCities] = useFetch(url)

   useEffect(() => {
    getCities()
   }, [])

   const dispatch = useDispatch()

   const handleFilterCity = (id) => {
    let url 

    if (id) {
      url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`  
    } else {
        url = 'https://hotels-api.academlo.tech/hotels'
    }
    dispatch(getHotelsThunk(url))
   }
   
 
  return (
    <section>
        <h3>City</h3>
        <select name="" id="" onChange={(e) => handleFilterCity(e.target.value)}>
          <option value=''>All cities</option>
          {
            cities?.map(city => (
              <option value={city.id} key={city.id}>{city.name}</option>
             ))
          }
        </select>
    </section>
  )
}
export default CategoryFilter