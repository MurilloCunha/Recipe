import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import imgPlaceholder from '../../images/tray.svg'


function ImageInput({id,name, required,getFile, defaultValue}) {
  const [uploadedImage, setUploadedImage]= useState(imgPlaceholder)

  const handleChange = useCallback((event) => {
    const uploadedImageURL = URL.createObjectURL(event.target.files[0])
    getFile && getFile({target:{value:event.target.files[0], name}})
    setUploadedImage(uploadedImageURL)
  })

  return (
    <div className="image-input">
      <input type="file" id={id} name={name} onChange={handleChange} accept="image/*" capture="camera" required={required}/>
      <label htmlFor={id} >
        <img src={defaultValue || uploadedImage} alt="adiciona uma foto da sua receita" />
      </label>
    </div>
  )
}

export default ImageInput

ImageInput.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  getFile: PropTypes.func,
}

ImageInput.defaultProps ={
  name:"image",
  required:false,
  id:"",
  defaultValue:undefined
}