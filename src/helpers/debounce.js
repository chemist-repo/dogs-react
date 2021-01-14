/**
 * @param {function} handler
 * @param {Number} ms
 * @returns {function}
 */
export default function debounce (handler, ms = 1000) {
  let isCooldown = false

  return function () {
    if (isCooldown) return

    handler.apply(this, arguments)

    isCooldown = true

    setTimeout(() => {
      isCooldown = false
    }, ms)
  }
}
