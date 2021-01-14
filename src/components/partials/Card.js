import UiPicture from '../ui/Picture'
import UiIcon from '../ui/Icon'

export default function PartialCard ({
  onClick = () => {},
  src = '',
  active = false
}) {
  return (
    <div
      onClick={onClick}
      className="card"
    >
      <UiPicture
        src={src}
      />
      <i className="card-icon">
      {active
        ? (<UiIcon name="heart-solid" />)
        : (<UiIcon name="heart" />)
      }
      </i>
    </div>
  )
}
