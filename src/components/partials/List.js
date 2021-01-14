

import { useEffect } from 'react'
import { connect } from 'react-redux'

import UiGallery from '../ui/Gallery'
import PartialCard from './Card'

import { SET_FAVORITES } from '../../store/action-types'
import actions from '../../store/actions'

import { mount } from '../../helpers/scroll'
import $ls from '../../helpers/ls'

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  }
}

const PartialList = ({
  onScroll = () => {},
  className = '',
  images = [],
  favorites,
  dispatch
}) => {
  const setFavorite = url => {
    let __favorites__ = []

    if (favorites.includes(url)) {
      __favorites__ = favorites.filter((favorite) => favorite !== url)
    } else {
      __favorites__ = [...favorites, url]
    }

    dispatch(actions[SET_FAVORITES](__favorites__))
    $ls.set('favorites', __favorites__)
  }

  useEffect(() => {
    mount(onScroll)
  }, [onScroll])

  return (
    <div
      className={`${className} container-fluid py-3`}
    >
      <UiGallery>
        {images.map((src, i) => (
          <PartialCard
            onClick={() => setFavorite(src)}
            key={`dog-${i}`}
            src={src}
            active={favorites.includes(src)}
          />
        ))}
      </UiGallery>
    </div>
  )
}

export default connect(mapStateToProps)(PartialList)
