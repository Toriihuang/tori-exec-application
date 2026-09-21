import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { asset } from '../asset'
import './CdPlayer.css'

// One text box (Artist / Track). Long names scroll like an old player display.
function Field({ label, value }) {
  const boxRef = useRef(null)
  const textRef = useRef(null)
  const [shift, setShift] = useState(0)

  useLayoutEffect(() => {
    function measure() {
      if (!boxRef.current || !textRef.current) return
      const extra = textRef.current.scrollWidth - boxRef.current.clientWidth
      setShift(extra > 0 ? extra : 0)
    }
    measure()
    document.fonts?.ready.then(measure)
  }, [value])

  return (
    <div className="cdp-row">
      <span className="cdp-label">{label}:</span>
      <div className="cdp-field">
        <div className="cdp-field-text" ref={boxRef}>
          <span
            ref={textRef}
            className={shift ? 'scrolling' : undefined}
            style={{ '--shift': `-${shift}px` }}
          >
            {value}
          </span>
        </div>
        <span className="cdp-drive" aria-hidden="true">‹D:›</span>
        <span className="cdp-dropdown" aria-hidden="true"></span>
      </div>
    </div>
  )
}

export default function CdPlayer({ cd, paused, volume, onToggle, onVolume, onClose }) {
  // Keep showing the last CD while the window animates closed
  const [lastCd, setLastCd] = useState(cd)
  if (cd && cd !== lastCd) setLastCd(cd)
  const shown = cd || lastCd
  const open = Boolean(cd)

  // Escape closes the window, like pressing the X
  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!shown) return null

  return (
    <div
      className={open ? 'cd-player open' : 'cd-player'}
      role="region"
      aria-label="CD player"
      inert={!open}
    >
      <div className="cdp-titlebar">
        <span className="cdp-title">
          <span className="cdp-disc-icon" aria-hidden="true"></span>
          CD Player
        </span>
        <span className="cdp-window-btns">
          <span className="cdp-wbtn min" aria-hidden="true"></span>
          <span className="cdp-wbtn max" aria-hidden="true"></span>
          <button type="button" className="cdp-wbtn close" onClick={onClose} aria-label="Close player and stop music"></button>
        </span>
      </div>

      <div className="cdp-body">
        <div
          className="cdp-art"
          style={shown.cover ? { backgroundImage: `url('${asset(shown.cover)}')` } : undefined}
          role="img"
          aria-label={`${shown.track} cover`}
        ></div>

        <div className="cdp-main">
          <Field label="Artist" value={shown.artist} />
          <Field label="Track" value={shown.track} />

          <input
            className="cdp-volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={e => onVolume(Number(e.target.value))}
            aria-label="Volume"
          />

          <div className="cdp-buttons">
            <button
              type="button"
              className="cdp-btn"
              onClick={onToggle}
              aria-label={paused ? 'Play' : 'Pause'}
            >
              <span className={paused ? 'glyph-play' : 'glyph-pause'} aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
