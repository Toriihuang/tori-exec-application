import Polaroid from './Polaroid'

// Position and tilt of each polaroid in the cluster (designed for 3 photos)
const LAYOUT = [
  { top: '0%',  left: '2%',  tilt: '-7deg' },
  { top: '28%', left: '45%', tilt: '5deg' },
  { top: '56%', left: '6%',  tilt: '-4deg' }
]

export default function HeroPhotos({ photos }) {
  return (
    <div className="hero-photos">
      {photos.slice(0, LAYOUT.length).map((p, i) => (
        <Polaroid
          key={i}
          photo={p.photo}
          caption={p.caption}
          alt={p.alt}
          className="hero-polaroid"
          style={{ top: LAYOUT[i].top, left: LAYOUT[i].left, '--tilt': LAYOUT[i].tilt, zIndex: i + 1 }}
        />
      ))}
    </div>
  )
}
