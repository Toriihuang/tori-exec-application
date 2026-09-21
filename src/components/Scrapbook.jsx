import Polaroid from './Polaroid'

const PHOTO_TILTS = ['-4deg', '3.5deg', '-2.5deg', '4deg', '-3deg']
const NOTE_TILTS  = ['1.2deg', '-1deg', '0.8deg', '-1.4deg', '1deg']

// Each entry becomes one row. Rows alternate: photo on the left, then on the right.
export default function Scrapbook({ entries }) {
  return (
    <div className="scrapbook">
      {entries.map((entry, i) => {
        const hasPhoto = entry.photo !== undefined
        const paragraphs = (entry.text || '').split(/\n\s*\n/).filter(Boolean)
        const rowClass = ['scrap-row', i % 2 === 1 && 'flip', !hasPhoto && 'text-only']
          .filter(Boolean).join(' ')

        return (
          <div className={rowClass} key={i}>
            {hasPhoto && (
              <div className="scrap-photo" style={{ '--tilt': PHOTO_TILTS[i % PHOTO_TILTS.length] }}>
                <Polaroid photo={entry.photo} caption={entry.caption} alt={entry.alt} />
              </div>
            )}
            <div className="scrap-note" style={{ '--tilt': NOTE_TILTS[i % NOTE_TILTS.length] }}>
              {entry.heading && <h3>{entry.heading}</h3>}
              {paragraphs.map((p, j) => (
                <p key={j} className={entry.placeholder ? 'is-placeholder' : undefined}>{p}</p>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
