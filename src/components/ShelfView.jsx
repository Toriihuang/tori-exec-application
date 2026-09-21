import CdButton from './CdButton'
import { ArrowIcon } from './Icons'

export default function ShelfView({ cds, hidden, playingId, onOpen, onHoverStart, onHoverEnd }) {
  return (
    <section id="view-shelf" className={hidden ? 'hidden' : ''}>
      <div className="intro">
        <p className="kicker">// Running for Co-President</p>
        <h1 className="display">Victoria (Tori) Huang</h1>
        <p>Hi, I'm Tori! Walk through my playlist with me!</p>
        <p className="scroll-hint">
          <ArrowIcon />
          Click a cd and play some music!
        </p>
      </div>

      <div className="shelf-wrap">
        <div className="shelf" id="shelf" tabIndex={0} aria-label="CD collection, scroll horizontally">
          {cds.map((cd, i) => (
            <CdButton
              key={cd.id}
              cd={cd}
              index={i}
              isPlaying={playingId === cd.id}
              onOpen={onOpen}
              onHoverStart={onHoverStart}
              onHoverEnd={onHoverEnd}
            />
          ))}
        </div>
      </div>

      <footer className="shelf-footer">Vote for me as Co-President!</footer>
    </section>
  )
}
