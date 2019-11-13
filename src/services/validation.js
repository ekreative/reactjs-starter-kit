export function isEmailValid (value) {
  const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return filter.test(value)
  // return value.indexOf('@') > 0
  // return true
}

export function isPasswordValid (value) {
  if (!/^\S+$/.test(value)) return false
  if (value.search(/[0-9]/) < 0) return false
  if (value.search(/[a-z]/i) < 0) return false
  if (value.length < 8) return false
  return true
}
