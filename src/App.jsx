import { useCallback, useEffect, useRef, useState } from 'react'
import { cds } from './data/cds'
import { asset } from './asset'
import ShelfView from './components/ShelfView'
import DetailView from './components/DetailView'
import CdPlayer from './components/CdPlayer'

function findCd(id) {
  return cds.find(c => String(c.id) === String(id)) || null
}

// If the page loads with a link like #cd-3, open that CD straight away
function getCdFromHash() {
  const match = window.location.hash.match(/^#cd-(\d+)/)
  return match ? findCd(match[1]) : null
}

export default function App() {
  const audioRef = useRef(null)
  const detailOpenIdRef = useRef(null) // id of the CD shown on the detail page, if any
  const hideTimerRef = useRef(null)

  const [initialCd] = useState(getCdFromHash)
  const [currentCd, setCurrentCd] = useState(initialCd)
  const [shelfHidden, setShelfHidden] = useState(Boolean(initialCd))
  const [detailHidden, setDetailHidden] = useState(!initialCd)
  const [detailActive, setDetailActive] = useState(Boolean(initialCd))
  const [playingId, setPlayingId] = useState(null) // CD showing the "now playing" bars on the shelf

  // CD player window
  const [playerCd, setPlayerCd] = useState(initialCd && initialCd.song ? initialCd : null)
  const [audioPaused, setAudioPaused] = useState(true)
  const [volume, setVolume] = useState(0.7)

  // --- Audio helpers ---------------------------------------------------
  function playSong(cd, fromShelf) {
    setPlayingId(null)
    if (!cd || !cd.song) return
    const audio = audioRef.current
    const src = asset(cd.song)
    if (audio.getAttribute('data-src') !== src) {
      audio.src = src
      audio.setAttribute('data-src', src)
    }
    audio.play().catch(() => {})
    if (fromShelf) setPlayingId(cd.id)
  }

  function stopSong() {
    audioRef.current.pause()
    setPlayingId(null)
  }

  // Keep the play/pause button in sync with the real audio
  useEffect(() => {
    const audio = audioRef.current
    const sync = () => setAudioPaused(audio.paused)
    audio.addEventListener('play', sync)
    audio.addEventListener('pause', sync)
    audio.addEventListener('ended', sync)
    return () => {
      audio.removeEventListener('play', sync)
      audio.removeEventListener('pause', sync)
      audio.removeEventListener('ended', sync)
    }
  }, [])

  // Volume slider
  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  // --- View switching --------------------------------------------------
  function showDetail(cd) {
    clearTimeout(hideTimerRef.current)
    setCurrentCd(cd)
    detailOpenIdRef.current = cd.id
    playSong(cd, false)
    setPlayerCd(cd.song ? cd : null)
    setShelfHidden(true)
    setDetailHidden(false)
    requestAnimationFrame(() => setDetailActive(true))
    window.scrollTo(0, 0)
  }

  function showShelf() {
    detailOpenIdRef.current = null
    stopSong()
    setPlayerCd(null)
    setDetailActive(false)
    clearTimeout(hideTimerRef.current)
    hideTimerRef.current = setTimeout(() => {
      setDetailHidden(true)
      setShelfHidden(false)
    }, 200)
  }

  // --- Event handlers --------------------------------------------------
  function handleOpen(cd) {
    showDetail(cd)
    window.history.pushState({ view: 'detail', id: cd.id }, '', '#cd-' + cd.id)
  }

  function handleBack() {
    window.history.pushState({ view: 'shelf' }, '', '#')
    showShelf()
  }

  function handleHoverStart(cd) {
    playSong(cd, true)
  }

  function handleHoverEnd(cd) {
    if (detailOpenIdRef.current !== cd.id) stopSong()
  }

  function handleTogglePlay() {
    const audio = audioRef.current
    if (audio.paused) audio.play().catch(() => {})
    else audio.pause()
  }

  const handleClosePlayer = useCallback(() => {
    audioRef.current.pause()
    setPlayerCd(null)
  }, [])

  // Browser back/forward buttons
  useEffect(() => {
    function onPopState(e) {
      const state = e.state
      if (state && state.view === 'detail') {
        const cd = findCd(state.id)
        if (cd) {
          showDetail(cd)
          return
        }
      }
      showShelf()
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Start the song if the page was opened on a #cd- link
  useEffect(() => {
    if (initialCd) {
      detailOpenIdRef.current = initialCd.id
      playSong(initialCd, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ShelfView
        cds={cds}
        hidden={shelfHidden}
        playingId={playingId}
        onOpen={handleOpen}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      />

      <DetailView
        cd={currentCd}
        hidden={detailHidden}
        active={detailActive}
        playing={Boolean(playerCd) && !audioPaused}
        onBack={handleBack}
      />

      <CdPlayer
        cd={playerCd}
        paused={audioPaused}
        volume={volume}
        onToggle={handleTogglePlay}
        onVolume={setVolume}
        onClose={handleClosePlayer}
      />

      <audio id="bgAudio" ref={audioRef} preload="none"></audio>
    </>
  )
}
