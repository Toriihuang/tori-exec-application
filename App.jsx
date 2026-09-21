import { useEffect, useRef, useState } from 'react'
import { cds } from './data/cds'
import { asset } from './asset'
import ShelfView from './components/ShelfView'
import DetailView from './components/DetailView'
import PauseButton from './components/PauseButton'

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

  // --- View switching --------------------------------------------------
  function showDetail(cd) {
    clearTimeout(hideTimerRef.current)
    setCurrentCd(cd)
    detailOpenIdRef.current = cd.id
    playSong(cd, false)
    setShelfHidden(true)
    setDetailHidden(false)
    requestAnimationFrame(() => setDetailActive(true))
    window.scrollTo(0, 0)
  }

  function showShelf() {
    detailOpenIdRef.current = null
    stopSong()
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
        onBack={handleBack}
      />

      <PauseButton audioRef={audioRef} />

      <audio id="bgAudio" ref={audioRef} preload="none"></audio>
    </>
  )
}
