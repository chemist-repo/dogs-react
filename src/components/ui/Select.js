import { useState, useRef } from 'react'
// import { mount, unmount } from '../../helpers/outside'

const RenderOption = ({ option, updateCurrent }) => {
  const onCLick = () => {
    updateCurrent(option)
  }
  return (
    <button
      onClick={onCLick}
      className="ui-select-option"
    >{ option }</button>
  )
}

export default function UiSelect ({
  current = 'Выберите значение',
  options = [],
  updateCurrent = () => {},
  Arrow = null
}) {
  const vNode = useRef(null)
  const [active, setActive] = useState(false)
  const filteredOptions = options.filter(option => option !== current)

  const onClickSelect = () => {
    setActive(!active)
  }
  const onClickOption = option => {
    setActive(false)
    updateCurrent(option)
  }
  // const onClickOutside = e => {
  //   setActive(false)
  //   mount(e.target, e)
  // }
  return (
    <div
      ref={vNode}
      className="ui-select"
    >
      <button
        onClick={onClickSelect}
        className={`ui-select-current ${active ? 'active' : ''}`}
      >
        <span className="ui-select-value">{ current }</span>
        {Arrow
          ? (<span className="ui-select-arrow"><Arrow /></span>)
          : null
        }
      </button>
      {active
        ? (<div className="ui-select-wrap">
          {filteredOptions.map((option, i) => (
            <RenderOption
              option={option}
              updateCurrent={onClickOption}
              key={`option-${i}`}
            />
          ))}
          </div>)
        : null
      }
    </div>
  )
}
