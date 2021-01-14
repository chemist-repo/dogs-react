import debounce from './debounce'

export function mount (event) {
  if (window.__onScroll__) {
    const { handler, option } = window.__onScroll__

    window.removeEventListener('scroll', handler, option)
    window.__onScroll__ = null

    delete window.__onScroll__
  }

  const handler = debounce(event, 100)

  const option = { passive: true }

  window.addEventListener('scroll', handler, option)
  window.__onScroll__ = { handler, option }
}

export function unmount () {
  if (!window.__onScroll__) return

  const { handler, option } = window.__onScroll__

  window.removeEventListener('scroll', handler, option)
  window.__onScroll__ = null

  delete window.__onScroll__
}

const scroll = {
  mount,
  unmount
}

export default scroll
