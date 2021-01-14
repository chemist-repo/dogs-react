export default function UiButton ({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="ui-button"
    >{ children }</button>
  )
}
