import { useState } from 'react'

export default function PauseButton({ audioRef }) {
  const [paused, setPaused] = useState(false)

  function handleClick() {
    const audio = audioRef.current
    if (audio.paused) {
      audio.play().catch(() => {})
      setPaused(false)
    } else {
      audio.pause()
      setPaused(true)
    }
  }

  return (
    <button
      id="pauseBtn"
      className={paused ? 'pause-btn paused' : 'pause-btn'}
      type="button"
      onClick={handleClick}
    >
      {paused ? 'Play music' : 'Pause music'}
    </button>
  )
}
