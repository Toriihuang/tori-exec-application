import { ImageIcon, EqBars } from './Icons'
import { asset } from '../asset'

const ROTATIONS = [-7, 5, -9, 6, -4, 8, -6, 4, -8, 6]
const OFFSETS   = [-14, 10, -6, 16, -10, 14, -8, 12, -16, 8]
const DELAYS    = [0, 0.6, 1.1, 0.3, 1.6, 0.8, 0.2, 1.3, 0.5, 1.0]
const HUE_START = [120, 200, 60, 280, 160, 40, 220, 100, 300, 180]

export default function CdButton({ cd, index, isPlaying, onOpen, onHoverStart, onHoverEnd }) {
  const rot = ROTATIONS[index % ROTATIONS.length]
  const off = OFFSETS[index % OFFSETS.length]
  const delay = DELAYS[index % DELAYS.length]
  const hue = HUE_START[index % HUE_START.length]

  const discStyle = { '--hue-angle': `${hue}deg` }
  if (cd.cover) {
    discStyle.backgroundImage = `url('${asset(cd.cover)}')`
    discStyle.backgroundSize = 'cover'
    discStyle.backgroundPosition = 'center'
  }

  return (
    <button
      className={isPlaying ? 'cd-btn is-playing' : 'cd-btn'}
      data-id={cd.id}
      aria-label={`Open ${cd.title}`}
      style={{ '--rot': `${rot}deg`, '--offset': `${off}px`, '--z': String(index + 1) }}
      onClick={() => onOpen(cd)}
      onMouseEnter={() => onHoverStart(cd)}
      onFocus={() => onHoverStart(cd)}
      onMouseLeave={() => onHoverEnd(cd)}
      onBlur={() => onHoverEnd(cd)}
    >
      <span className="cd-caption-float">{cd.title} — {cd.role}</span>
      <div className="cd-anim" style={{ '--delay': `${delay}s` }}>
        <div className="cd-disc" style={discStyle}>
          {!cd.cover && (
            <div className="cd-label">
              <span><ImageIcon /></span>
              <span className="cover-label">Add cover art</span>
            </div>
          )}
          <div className="cd-hole" aria-hidden="true"></div>
        </div>
      </div>
      <span className="now-playing" aria-hidden="true"><EqBars /></span>
    </button>
  )
}
