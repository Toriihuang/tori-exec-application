// Turns any https:// link inside a piece of text into a clickable link
const URL_RE = /(https?:\/\/[^\s]*[^\s.,;:!?)"'’”])/g

function prettyUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

export default function Linkify({ text }) {
  const parts = text.split(URL_RE)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer">{prettyUrl(part)}</a>
    ) : (
      part
    )
  )
}
