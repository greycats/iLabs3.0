import { useState, useEffect } from 'react'
import { getImage } from 'scripts/PreloadManager'

export default (id, ) => {
  // const [image, setImage] = useState()

  // useEffect(() => {
  //   setImage(getImage(id))
  // }, [])

  // return image
  return getImage(id)
}