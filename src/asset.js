// Turns "covers/track01.png" into a full path that works both locally
// and when the site is hosted in a subfolder (e.g. GitHub Pages).
export function asset(path) {
  if (!path || /^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
