import { useState, useEffect } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import $op from 'object-path'
import UiSelect from '../ui/Select'

const mapStateToProps = state => {
  return {
    allBreedsList: state.allBreedsList
  }
}

const PartialsHeader = ({ allBreedsList }) => {
  const history = useHistory()
  const match = useRouteMatch({
    path: '/b/:bread',
    strict: true,
    sensitive: true
  })

  const breed = $op.get(match, 'params.bread', 'Выберите значение')
  const [current, setCurrent] = useState(breed)

  useEffect(() => {
    setCurrent(breed)
  }, [breed])

  const onSelectBreed = breed => {
    history.push(`/b/${breed}`)
  }
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/img/logo.png" alt="dogs-vue" className="logo-img" />
      </Link>
      <nav className="nav">
        <Link to="/" className="ui-button">Случайные собачки</Link>
        <UiSelect
          updateCurrent={onSelectBreed}
          options={allBreedsList}
          current={current}
        />
        <Link to="/favorites" className="ui-button">Избранное</Link>
      </nav>
    </header>
  )
}

export default connect(mapStateToProps)(PartialsHeader)
