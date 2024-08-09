import React from 'react'
import './Title.css'

const Title = ({title,subTitle}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
}
import './Title.css'

export default Title
