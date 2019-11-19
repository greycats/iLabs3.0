import { useState, useEffect } from 'react'
import { getImage } from 'scripts/PreloadManager'

export default (id) => {
  const [image, setImage] = useState('')

  if (!image) {
    setImage(getImage(id))
  }

  return image
}