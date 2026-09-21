import { ImageIcon, BackIcon, EqBars } from './Icons'
import { asset } from '../asset'

export default function DetailView({ cd, hidden, active, onBack }) {
  const classes = [hidden && 'hidden', active && 'active'].filter(Boolean).join(' ')

  return (
    <section id="view-detail" className={classes} aria-live="polite">
      {cd && (
        <>
          <button className="back-btn" id="backBtn" type="button" onClick={onBack}>
            <BackIcon /> Back to shelf
          </button>
          <div className="detail-grid">
            <div
              className="detail-art"
              style={cd.cover ? { backgroundImage: `url('${asset(cd.cover)}')` } : undefined}
            >
              {!cd.cover && (
                <>
                  <ImageIcon />
                  <span>Add cover image</span>
                </>
              )}
            </div>
            <div>
              <div className="detail-head">
                <p className="kicker">{cd.label}</p>
                <h2 className="display">{cd.title}</h2>
                <p className="role">{cd.role}</p>
              </div>
              {cd.song && (
                <p className="now-playing-badge">
                  <span className="now-playing" aria-hidden="true"><EqBars /></span> Now playing
                </p>
              )}
              <dl className="meta-strip">
                <div><dt>Year</dt><dd>{cd.year}</dd></div>
                <div><dt>Medium</dt><dd>{cd.medium}</dd></div>
                <div><dt>Role</dt><dd>{cd.role}</dd></div>
              </dl>
              <div className="placeholder-text">[Write the main description here — what this piece is, why it matters, and the story behind it. Two or three sentences is usually enough.]</div>
              <div className="placeholder-text">[Add a second paragraph here for more detail — process, context, or a specific moment worth mentioning.]</div>
              <p className="gallery-heading">// gallery</p>
              <div className="gallery">
                {[1, 2, 3].map(n => (
                  <div className="gallery-slot" key={n}>
                    <ImageIcon />
                    <span>Add photo</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
