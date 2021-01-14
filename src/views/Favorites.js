
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PartialList from '../components/partials/List'

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

const Favorites = ({ favorites }) => {
  if (favorites && favorites.length) {
    return (
      <PartialList
        images={favorites}
        className="view-favorites"
      />
    )
  }
  return <p className="pa-3 ma-0">Список избранного пуст, на <Link to="/">главную</Link></p>
}

export default connect(mapStateToProps)(Favorites)
