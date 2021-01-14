export function mount (el, event) {
  if (el.__clickOutside__) {
    window.removeEventListener('click', el.__clickOutside__)
    el.__clickOutside__ = null
  }
  const handler = (e) => {
    if ((!el.contains(e.target) && el !== e.target)) {
      event(e)
    }
  }

  window.addEventListener('click', handler)
  el.__clickOutside__ = handler
}

export function unmount (el) {
  window.removeEventListener('click', el.__clickOutside__)
  el.__clickOutside__ = null
}

const outside = {
  mount,
  unmount
}

export default outside
