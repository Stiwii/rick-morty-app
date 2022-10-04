
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import Error from './components/Error'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  // guardar location
  const [location, setLocation] = useState()
  //guardar informacion del input y hacer peticion cuando se hace submit 
  const [searchInput, setSearchInput] = useState('')
  //guarda las posiles sugerencias
  const [suggestedList, setSuggestedList] = useState()
  // Indicar error
  const [hasError, setHasError] = useState(false)

  // console.log(searchInput)

  useEffect(() => {
    let id = getRandomNumber()
    if (searchInput) {
      id = searchInput
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)})
      .catch(err => setHasError(true))
  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.idLocation.value)
  }

  const handleChange = e => {
    if (e.target.value === '') {
      return setSuggestedList()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

    axios.get(URL)
      .then(res => setSuggestedList(res.data.results))
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      {/* <header className='header__container-img'>
        <img className='header__img' src='https://i.pinimg.com/originals/26/3f/8a/263f8a2cbfc9d6e90f37e32f88d3265d.gif' alt="" />
      </header> */}
      <h1 className='app__title' >Rick and Morty Api</h1>
      <form className='search__container' onSubmit={handleSubmit}>
        <input 
          className='search__input'
          autocomplete="off"
          id='idLocation'
          placeholder='Find Location' type="text"
          onChange={handleChange}
        />
        <button className='button-53'>Search</button>
        <FilterList 
        suggestedList={suggestedList} 
        setSearchInput={setSearchInput} 
        setSuggestedList={setSuggestedList}
        />
      </form>
      {
      hasError? 
      <Error />
      : 
      <>
      <LocationInfo 
      location={location} 
      />
      <div className='card__container'>
        {
          location?.residents.map(URL => (
            <CardResident key={URL} URL={URL} />
          )
          )
        }
      </div>
      </>
}
    </div>
  )
}

export default App
