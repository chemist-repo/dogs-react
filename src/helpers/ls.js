export default {
  get (key) {
    return JSON.parse(localStorage.getItem(key) || 'false')
  },
  set (key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  },
  remove (key) {
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  }
}
