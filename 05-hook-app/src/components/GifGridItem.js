import React from 'react'
import propType from 'prop-types'

export const GifGridItem = ({title, url}) => {
  
  
    return (
        <div className="card animate__animated animate__pulse">
            <img src={url} alt={title}/>
        </div>
  )
}

GifGridItem.propType = {
    title: propType.string.isRequired,
    url: propType.string.isRequired
}
