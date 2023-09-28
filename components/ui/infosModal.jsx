'use client';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {CldImage} from 'next-cloudinary';
import {Button} from './button';

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
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-white opacity-60"></div>
      <div className="relative z-10 grid w-full max-w-2xl gap-2 bg-background p-6 shadow-lg duration-200 rounded-lg overflow-scroll h-[80vh]">
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <section className="prose prose-purple w-fit text-gray-600 space-y-4">
            <p>
              Embark upon the winding paths of light and shadow with Cedric Florentin, a
              soul whispered from the embrace of Toulouse&rsquo;s golden warmth, and now
              painting stories in the vibrant breath of Hanoi. At the tender age of 6,
              with the pulse of a disposable camera&rsquo;s shutter, the mosaic of his
              grand destiny gently unfolded, a legacy whispered from a grandfather&apos;s
              delicate dance with macro and portrait imagery.
            </p>
            <p>
              In the sacred echo of the lens, discover the whispers of faces aglow with
              unspoken tales, the rhythmic ballet of city streets, and landscapes draped
              in celestial elegance. Cedric&apos;s frame captures a world cloaked in
              exquisite paradox, where symmetry and chaos embrace in a tender waltz, and
              the unseen rhythms of the universe hum softly beneath the surface.
            </p>
            <p>
              Embark with him on a nostalgic odyssey to the hallowed roots of film
              photography, where each frame cradles patience and anticipation, a sacred
              echo of an art form&rsquo;s ancient breath. Here, in the hushed rustle of
              film, uncover the veiled dimensions of his visions, where every image
              cradles the whispers of his soul&apos;s gentle murmurs.
            </p>
            <p>
              Step into Cedric&apos;s world, a realm where every frame is a sonnet, every
              shutter&apos;s whisper a delicate verse in the eternal dance of light and
              life. Welcome to the journey, a poetic pilgrimage bathed in radiant hues and
              timeless moments.
              <span className="font-semibold">Bienvenue dans le voyage.</span>
            </p>
          </section>
          {/* <CldImage {...props} className="object-contain max-h-[90vh] w-full" /> */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button onClick={onClose} className="mt-2">
              X
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body, // This is where the portal will be rendered
  );
}
