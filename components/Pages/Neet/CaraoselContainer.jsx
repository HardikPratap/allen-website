import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import img1 from "../../../src/assets/neetcarosel1.webp";
import img2 from "../../../src/assets/neetcarosel2.webp";
import img3 from "../../../src/assets/neetcarosel3.webp";
import img4 from "../../../src/assets/neetcarosel4.webp";
import img5 from "../../../src/assets/neetcarosel5.webp";
import './CaraoselContainer.css';

function CaraoselContainer() {
  // Initialize the Embla carousel with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]  // Configuring autoplay
  );

  // Restart the autoplay when Embla is initialized
  const restartAutoplay = useCallback(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", restartAutoplay);
    }
  }, [emblaApi, restartAutoplay]);

  return (
    <div className="caraosel-container-neet">
      <h2>We work with you to improve your learning outcomes</h2>
      <h5>Proven over 1000s of ALLEN students</h5>

      <div className="embla-neet" ref={emblaRef}>
        <div className="embla__container-neet">
          <div className="embla__slide-neet">
            <img src={img1} alt="Slide 1" />
          </div>
          <div className="embla__slide-neet">
            <img src={img2} alt="Slide 2" />
          </div>
          <div className="embla__slide-neet-neet">
            <img src={img3} alt="Slide 3" />
          </div>
          <div className="embla__slide-neet">
            <img src={img4} alt="Slide 4" />
          </div>
          <div className="embla__slide-neet">
            <img src={img5} alt="Slide 5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaraoselContainer;