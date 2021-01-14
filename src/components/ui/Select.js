import { useState, useRef } from 'react'
import { mount } from '../../helpers/outside'

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
  const refSelectRoot = useRef(null)
  const selectNode = refSelectRoot.current
  const [active, setActive] = useState(false)
  const filteredOptions = options.filter(option => option !== current)

  const onClickSelect = () => {
    setActive(!active)
  }
  const onClickOption = option => {
    setActive(false)
    updateCurrent(option)
  }

  if (selectNode && !selectNode.__clickOutside__) {
    mount(selectNode, () => setActive(false))
  }
  return (
    <div
      ref={refSelectRoot}
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
