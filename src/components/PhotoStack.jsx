import { useRef, useState } from 'react'
import { ImageIcon } from './Icons'
import { asset } from '../asset'
import './PhotoStack.css'

// Where each card sits in the pile: 0 = top of the stack
const SLOTS = [
  { x: '0%',   y: '0%',   r: '-1.5deg' },
  { x: '3.5%', y: '2.5%', r: '3deg' },
  { x: '-3%',  y: '4.5%', r: '-4deg' },
  { x: '5%',   y: '6.5%', r: '5.5deg' }
]
const LEAVE_MS = 320

export default function PhotoStack({ photos }) {
  const [order, setOrder] = useState(() => photos.map((_, i) => i))
  const [leaving, setLeaving] = useState(null)
  const busy = useRef(false)

  const top = order[0]

  function next() {
    if (busy.current || photos.length < 2) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const sendToBottom = () => setOrder(o => [...o.slice(1), o[0]])
    if (reduceMotion) { sendToBottom(); return }
    busy.current = true
    setLeaving(top)
    setTimeout(() => {
      sendToBottom()
      setLeaving(null)
      busy.current = false
    }, LEAVE_MS)
  }

  return (
    <div className="photo-stack-wrap">
      {/* Rough, torn paper edge used by the photo frames */}
      <svg className="svg-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <filter id="deckle-edge" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div className="photo-stack">
        {photos.map((p, i) => {
          const depth = order.indexOf(i)
          const slot = SLOTS[Math.min(depth, SLOTS.length - 1)]
          const isTop = depth === 0
          return (
            <button
              key={i}
              type="button"
              className={leaving === i ? 'stack-card leaving' : 'stack-card'}
              style={{
                zIndex: leaving === i ? photos.length + 1 : photos.length - depth,
                '--x': slot.x, '--y': slot.y, '--r': slot.r
              }}
              tabIndex={isTop ? 0 : -1}
              aria-hidden={!isTop}
              aria-label={isTop ? `Photo ${i + 1} of ${photos.length}: ${p.description}. Show next photo` : undefined}
              onClick={isTop ? next : undefined}
            >
              <span className="stack-paper" aria-hidden="true"></span>
              <span className="stack-photo">
                {p.photo ? (
                  <img src={asset(p.photo)} alt={p.alt || ''} draggable="false" style={{ objectPosition: p.position || 'center' }} />                ) : (
                  <span className="stack-empty"><ImageIcon /><span>Add photo</span></span>
                )}
              </span>
              <span className="stack-desc">{p.description}</span>
            </button>
          )
        })}
      </div>

      <p className="stack-hint">Click the photo to see the next one ({top + 1}/{photos.length})</p>
    </div>
  )
}
