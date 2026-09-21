import { ImageIcon } from './Icons'
import { asset } from '../asset'

// A polaroid frame. With no photo it shows a dark empty frame as a placeholder.
export default function Polaroid({ photo, caption, alt, className = '', style }) {
  return (
    <figure className={`polaroid ${className}`.trim()} style={style}>
      <div className="polaroid-img">
        {photo ? (
          <img src={asset(photo)} alt={alt || caption || ''} />
        ) : (
          <div className="polaroid-empty">
            <ImageIcon />
            <span>Add photo</span>
          </div>
        )}
      </div>
      {caption && <figcaption className="polaroid-caption">{caption}</figcaption>}
    </figure>
  )
}
