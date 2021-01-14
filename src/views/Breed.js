import { useEffect } from 'react'
import { connect, useStore } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import PartialList from '../components/partials/List'

import $op from 'object-path'

const mapStateToProps = state => {
  return {
    breedDogsList: state.breedDogsList,
    isBreedDogsAction: state.isBreedDogsAction
  }
}

const Breed = ({
  breedDogsList,
  isBreedDogsAction
}) => {
  const { $api } = useStore()
  const match = useRouteMatch({
    path: '/b/:bread',
    strict: true,
    sensitive: true
  })

  const breed = $op.get(match, 'params.bread', false)

  useEffect(() => {
    $api.getBreedRandomDogsList(breed)
  }, [$api, breed])

  const onScroll = async () => {
    const offsetRatioForEvent = 0.95
    const currentScrollTop = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight
    const startHeightForEvent = document.documentElement.offsetHeight * offsetRatioForEvent

    if (currentScrollTop >= startHeightForEvent && !isBreedDogsAction) {
      await $api.getMoreBreedRandomDogsList(breed)
    }
  }

  return (
    <PartialList
      onScroll={onScroll}
      images={breedDogsList}
      className="view-breed"
    />
  )
}

export default connect(mapStateToProps)(Breed)
