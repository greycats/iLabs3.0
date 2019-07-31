export function isTouch() {
  return (
    'ontouchstart' in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  )
}

export function preventLink(e, nohref = false) {
  e.preventDefault()
  if (nohref === false) {
    const el = e.currentTarget
    requestAnimationFrame(() => {
      window.location.href = el.href
    })
  }
}
