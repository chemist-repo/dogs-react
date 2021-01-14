export function mount (el, event) {
  const handler = (e) => {
    if ((!el.contains(e.target) && el !== e.target)) {
      event(e)
    }
  }
  el.__vueClickOutside__ = handler

  // Debounce click
  setTimeout(() => {
    window.addEventListener('click', handler)
  }, 0)
}
export function unmount (el) {
  window.removeEventListener('click', el.__clickOutside__)
  el.__clickOutside__ = null
}


export default {
  mount,
  unmount
}
