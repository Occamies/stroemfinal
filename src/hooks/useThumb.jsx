


import { useState } from 'react'

const useThumb = () => {

  //this state is to hold the current image
  const [thumbImage, setThumbImage] = useState()

  // the function that creates the image from the filestream
  const makeThumb = file => {

    if (file) {
      // create image
      let reader = new FileReader()

      // the reader / loader starts
      reader.onload = (r) => {

        setThumbImage(<img src={r.target.result} width="100" alt="Thumb-visning af billede" className="imagethumb" />)
      }

      // the reader starts (load) by reading the file thats sent
      reader.readAsDataURL(file)

    } else {
      // empty the state so there is no image
      setThumbImage()
    }

  }

  //this sents out of the hook
  return [makeThumb, thumbImage]
}

export default useThumb