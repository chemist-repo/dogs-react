import { useState, useEffect } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import $op from 'object-path'
import UiSelect from '../ui/Select'
import UiIcon from '../ui/Icon'

const mapStateToProps = state => {
  return {
    allBreedsList: state.allBreedsList
  }
}

const PartialHeader = ({ allBreedsList, dispatch }) => {
  const history = useHistory()
  const match = useRouteMatch({
    path: '/b/:bread',
    strict: true,
    sensitive: true
  })

  const breed = $op.get(match, 'params.bread', 'Выберите значение')
  const [active, setActive] = useState(false)
  const [current, setCurrent] = useState(breed)

  useEffect(() => {
    setActive(false)
    setCurrent(breed)
  }, [breed])

  const onToggleActive = () => {
    setActive(!active)
  }
  const onSelectBreed = breed => {
    history.push(`/b/${breed}`)
  }

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/dogs-react/img/logo.png" alt="dogs-vue" className="logo-img" />
      </Link>
      <button onClick={onToggleActive} className="menu">
        {active
          ? (<UiIcon name="close" />)
          : (<UiIcon name="menu" />)
        }
      </button>
      <nav className={`nav ${active ? 'active': ''}`}>
        <Link to="/" className="ui-button">Случайные собачки</Link>
        <UiSelect
          updateCurrent={onSelectBreed}
          options={allBreedsList}
          current={current}
          Arrow={() => <UiIcon name="arrow-down" />}
        />
        <Link to="/favorites" className="ui-button">Избранное</Link>
      </nav>
    </header>
  )
}

export default connect(mapStateToProps)(PartialHeader)
