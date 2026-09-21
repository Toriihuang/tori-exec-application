import CdButton from './CdButton'
import PhotoStack from './PhotoStack'
import { ArrowIcon } from './Icons'
import { heroPhotos, earphonesImage, cameraImage } from '../data/photos'
import { asset } from '../asset'

export default function ShelfView({ cds, hidden, playingId, onOpen, onHoverStart, onHoverEnd }) {
  return (
    <section id="view-shelf" className={hidden ? 'hidden' : ''}>
      <div className="hero">
        <div className="intro">
          <p className="kicker">// Running for Co-President</p>
          <h1 className="display">Victoria (Tori) Huang</h1>
          <p>Hi, I'm Tori! Walk through my playlist with me!</p>
          <p className="scroll-hint">
            <ArrowIcon />
            Click a cd and play some music!
          </p>
        </div>

        <div className="hero-right">
          <img
            className="hero-camera"
            src={asset(cameraImage)}
            alt=""
            aria-hidden="true"
            onError={e => { e.currentTarget.style.display = 'none' }}
          />
          <PhotoStack photos={heroPhotos} />
        </div>
      </div>

      <div className="shelf-wrap">
        <img
          className="shelf-earphones"
          src={asset(earphonesImage)}
          alt=""
          aria-hidden="true"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
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
