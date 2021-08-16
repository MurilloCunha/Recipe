import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import imgPlaceholder from '../../images/tray.svg'


function ImageInput({name}) {
  const [uploadedImage, setUploadedImage]= useState(imgPlaceholder)


  const handleChange = useCallback((event) => {
    const uploadedImageURL = URL.createObjectURL(event.target.files[0])
    setUploadedImage(uploadedImageURL)
  })

  return (
    <div className="image-input">
      <input type="file" id={name} name={name} onChange={handleChange} accept="image/*" capture="camera"/>
      <label htmlFor={name} >
        <img src={uploadedImage} alt="adiciona uma foto da sua receita" />
      </label>
    </div>
  )
}

export default ImageInput

ImageInput.propTypes = {
  name: PropTypes.string,
}

ImageInput.defaultProps ={
  name:"image"
}