import React from 'react'
import './styles/FilterList.css'

const FilterList = ({ suggestedList, setSearchInput ,setSuggestedList}) => {

    
    const handleClick = id => {
        setSearchInput(id)
        setSuggestedList()
    }

    return (
        <ul className='filter__container'>
            {
                suggestedList?.map(location => (
                    <li 
                    className='filter__list'
                    onClick={() => {
                        handleClick(location.id)
                        
                    }} 
                    key={location.id}>{location.name}
                    </li>
                ))
            }
        </ul>
    )
}

export default FilterList