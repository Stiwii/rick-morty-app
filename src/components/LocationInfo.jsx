import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {

    // console.log(location)
  return (
    <article className='location__container'>
        <h3 className='location__name'>{location?.name}</h3>
        <ul className='location__list'>
            <li className='location__item'><span className='location__span'>Type: </span>{location?.type}</li>
            <li className='location__item'><span className='location__span'>Dimension: </span>{location?.dimension}</li>
            <li className='location__item'><span className='location__span'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo