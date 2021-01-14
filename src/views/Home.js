import { useEffect } from 'react'
import { connect, useStore } from 'react-redux'
import PartialList from '../components/partials/List'

const mapStateToProps = state => {
  return {
    randomDogsList: state.randomDogsList,
    isRandomDogsAction: state.isRandomDogsAction
  }
}

const Home = ({
  randomDogsList,
  isRandomDogsAction
}) => {
  const { $api } = useStore()

  useEffect(() => {
    $api.getRandomDogsList()
  }, [$api])

  const onScroll = async () => {
    const offsetRatioForEvent = 0.95
    const currentScrollTop = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight
    const startHeightForEvent = document.documentElement.offsetHeight * offsetRatioForEvent

    if (currentScrollTop >= startHeightForEvent && !isRandomDogsAction) {
      await $api.getMoreRandomDogsList()
    }
  }

  return (
    <PartialList
      onScroll={onScroll}
      images={randomDogsList}
      className="view-home"
    />
  )
}

export default connect(mapStateToProps)(Home)
