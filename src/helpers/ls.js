export function get (key) {
  return JSON.parse(localStorage.getItem(key) || 'false')
}

export function set (key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

export function remove (key) {
  localStorage.removeItem(key)
}
export function clear () {
  localStorage.clear()
}

const ls = {
  get,
  set,
  remove,
  clear
}

export default ls
