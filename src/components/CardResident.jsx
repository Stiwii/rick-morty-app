import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/CardResident.css'
const CardResident = ({ URL }) => {

  const [resident, setResident] = useState()

  useEffect(() => {
    axios.get(URL)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))
  }, [])
  // console.log(resident)
  return (
    <article className='card'>
      <header className={`card__header ${resident?.status}__img`}>
        <img className='card__img' src={resident?.image} alt="" />
        <div className='card__conteiner-status'>
          <div className={`card__circle-status ${resident?.status}`}></div>
          <span className='card__status'>{resident?.status}</span>
        </div>
      </header>
      <section className='card__body'>
        <h3 className='card__name'>{resident?.name}</h3>
        <ul className='card__list'>
          <li className='card__item'><span className='card__span'>Specie: </span>{resident?.species}</li>
          <li className='card__item'><span className='card__span'>Origin: </span>{resident?.origin.name}</li>
          <li className='card__item'><span className='card__span'>Episodes where apper: </span>{resident?.episode.length}</li>
        </ul>
      </section>
    </article>
  )
}

export default CardResident