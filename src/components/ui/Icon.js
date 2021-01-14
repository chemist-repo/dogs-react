export default function UiIcon ({ name, title }) {
  const iconPath = (() => {
    let icon = require(`../../assets/icons/${name}.svg`)
    if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
      icon = icon.default
    }

    return icon.url
  })()

  return (
    <svg className={`ui-icon ui-icon--${name}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {title ? (<title>{ title }</title>) : null}
    <use xlinkHref={iconPath} xmlnsXlink="http://www.w3.org/1999/xlink" />
  </svg>
  )
}
