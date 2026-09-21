import { useState } from 'react'
import './SongRequest.css'

// Turns a normal Spotify link into the embeddable player link
function toEmbedUrl(url) {
  try {
    const match = new URL(url).pathname.match(/\/(playlist|album)\/([A-Za-z0-9]{10,})/)
    return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator` : null
  } catch {
    return null
  }
}

const EMPTY = { song: '', artist: '', name: '', message: '' }

export default function SongRequest({ request }) {
  const [fields, setFields] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const embedUrl = toEmbedUrl(request.playlistUrl)
  const formReady = request.formEndpoint && !request.formEndpoint.includes('YOUR_FORM_ID')

  function update(e) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formReady) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(request.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...fields, _gotcha: e.target._gotcha.value })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setFields(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="scrapbook">
      <div className="scrap-row request-row">
        <div className="scrap-note request-note" style={{ '--tilt': '-0.8deg' }}>
          {request.heading && <h3>{request.heading}</h3>}
          {request.text && <p>{request.text}</p>}

          {status === 'sent' ? (
            <div className="request-thanks" role="status">
              <p>Thank you! Your song is on my list.</p>
              <button type="button" className="request-btn secondary" onClick={() => setStatus('idle')}>
                Recommend another song
              </button>
            </div>
          ) : (
            <form className="request-form" onSubmit={handleSubmit}>
              <label>
                <span>Song</span>
                <input name="song" value={fields.song} onChange={update} required maxLength={120} autoComplete="off" />
              </label>
              <label>
                <span>Artist</span>
                <input name="artist" value={fields.artist} onChange={update} maxLength={120} autoComplete="off" />
              </label>
              <label>
                <span>Your name <em>(optional)</em></span>
                <input name="name" value={fields.name} onChange={update} maxLength={80} autoComplete="name" />
              </label>
              <label>
                <span>Why this song? <em>(optional)</em></span>
                <textarea name="message" value={fields.message} onChange={update} rows={2} maxLength={500} />
              </label>

              {/* hidden field that catches spam bots */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="request-trap" aria-hidden="true" />

              <button type="submit" className="request-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send recommendation'}
              </button>

              {status === 'error' && (
                <p className="request-error" role="alert">
                  {formReady
                    ? "That didn't send. Check your connection and try again."
                    : 'The form isn\u2019t connected yet. Add your Formspree link in cds.js.'}
                </p>
              )}
            </form>
          )}
        </div>

        <div className="playlist-card" style={{ '--tilt': '1.5deg' }}>
          {embedUrl ? (
            <iframe
              title="Tori's Spotify playlist"
              src={embedUrl}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ) : (
            <div className="playlist-empty">Add your Spotify playlist link in cds.js</div>
          )}
          {embedUrl && (
            <a className="playlist-link" href={request.playlistUrl} target="_blank" rel="noopener noreferrer">
              Open the playlist in Spotify
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
