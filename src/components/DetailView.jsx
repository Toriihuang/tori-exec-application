import { ImageIcon, BackIcon, EqBars } from './Icons'
import Scrapbook from './Scrapbook'
import SongRequest from './SongRequest'
import { placeholderScrapbook } from '../data/cds'
import { asset } from '../asset'

export default function DetailView({ cd, hidden, active, playing, onBack }) {
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
              {cd.song && playing && (
                <p className="now-playing-badge">
                  <span className="now-playing" aria-hidden="true"><EqBars /></span> Now playing
                </p>
              )}
              <dl className="meta-strip">
                <div><dt>Year</dt><dd>{cd.year}</dd></div>
                <div><dt>Medium</dt><dd>{cd.medium}</dd></div>
                <div><dt>Role</dt><dd>{cd.role}</dd></div>
              </dl>
            </div>
          </div>

          {cd.request
            ? <SongRequest key={cd.id} request={cd.request} />
            : <Scrapbook entries={cd.scrapbook || placeholderScrapbook} />}
        </>
      )}
    </section>
  )
}
