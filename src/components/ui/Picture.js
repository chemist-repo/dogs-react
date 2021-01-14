import { useState, useEffect } from 'react'
import preFetchImage from '../../helpers/preFetchImage'

const REG_EXP_EXTERNAL_LINK = new RegExp('^(?:[a-z]+:)?//', 'i')
const NO_IMAGE_PATH = `/dogs-react/img/no-image.jpg`

export default function UiPicture ({
  format = '4x3',
  alt = 'dog',
  src = '',
  onLoad = () => {}
}) {
  const [imgPath, setImgPath] = useState(NO_IMAGE_PATH)

  useEffect(
    () => {
      (async () => {
        if (REG_EXP_EXTERNAL_LINK.test(src)) {
          const imgSrc = await preFetchImage(src, NO_IMAGE_PATH)
          setImgPath(imgSrc)
          onLoad(imgSrc)
        } else {
          setImgPath(src)
        }
      })()
    },
    [src, onLoad]
  )

  return (
    <picture
      className={`ui-picture ui-picture-format--${format}`}
    >
      <img
        src={imgPath}
        alt={alt}
        className="ui-picture--img"
      />
    </picture>
  )
}
