import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <p className="pa-3 ma-0">Страницы не существует, на <Link to="/">главную</Link></p>
  )
}

export default NoMatch
