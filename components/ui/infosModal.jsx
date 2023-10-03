'use client';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {CldImage} from 'next-cloudinary';
import style from './InfosModal.module.css';

export default function InfosModal({show, onClose, ...props}) {
  useEffect(() => {
    if (show) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div onClick={onClose} className={style.modal}>
      <div className={style['modal__backdrop']}></div>
      <div className={style['modal__popbox']}>
        <section>
          <div className={style.portrait}>
            <CldImage
              src="https://res.cloudinary.com/dduwp6ob6/image/upload/v1696166893/film/comercial/Capture0012_p2jbne.jpg"
              height={200}
              width={200}
              alt="Me, the photographer"
            />
          </div>
          <p>
            Embark upon the winding paths of light and shadow with Cedric Florentin, a
            soul whispered from the embrace of Toulouse&rsquo;s golden warmth, and now
            painting stories in the vibrant breath of Hanoi. At the tender age of 6, with
            the pulse of a disposable camera&rsquo;s shutter, the mosaic of his grand
            destiny gently unfolded, a legacy whispered from a grandfather&apos;s delicate
            dance with macro and portrait imagery.
          </p>
          <p>
            In the sacred echo of the lens, discover the whispers of faces aglow with
            unspoken tales, the rhythmic ballet of city streets, and landscapes draped in
            celestial elegance. Cedric&apos;s frame captures a world cloaked in exquisite
            paradox, where symmetry and chaos embrace in a tender waltz, and the unseen
            rhythms of the universe hum softly beneath the surface.
          </p>
          <p>
            Embark with him on a nostalgic odyssey to the hallowed roots of film
            photography, where each frame cradles patience and anticipation, a sacred echo
            of an art form&rsquo;s ancient breath. Here, in the hushed rustle of film,
            uncover the veiled dimensions of his visions, where every image cradles the
            whispers of his soul&apos;s gentle murmurs.
          </p>
          <p>
            Step into Cedric&apos;s world, a realm where every frame is a sonnet, every
            shutter&apos;s whisper a delicate verse in the eternal dance of light and
            life. Welcome to the journey, a poetic pilgrimage bathed in radiant hues and
            timeless moments.
          </p>
          <p>
            <span className="font-semibold">Bienvenue dans le voyage.</span>
          </p>
        </section>
        <div className={style['button__box']}>
          <button className={style.btn} onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>,
    document.body, // This is where the portal will be rendered
  );
}
