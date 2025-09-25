import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./style.css";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      image: "/images/a.jpg",
      title: "Bienvenidos",
      description: "Descubre nuestros servicios y proyectos",
    },
    {
      image: "/images/a.jpg",
      title: "Innovación",
      description: "Soluciones creativas para tus necesidades",
    },
    {
      image: "/images/a.jpg",
      title: "Calidad",
      description: "Trabajamos con los más altos estándares",
    },
  ];

  const scrollTo = (index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) {
        autoplay.stop();
        autoplay.play();
      }
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <main className="homeContainer">
      <section className="heroSection">
        <div className="heroCarousel" ref={emblaRef}>
          <div className="heroCarouselContainer">
            {slides.map((slide, index) => (
              <div className="heroSlide" key={index}>
                <div
                  className="heroImage"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              </div>
            ))}
          </div>

          <div className="heroTextBlock">
            <h2>
              Impulsamos las artes, la cultura y el patrimonio en la zona sur de
              Chile
            </h2>
            <button className="heroButton">Saber Más</button>
          </div>

          <div className="heroDots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`heroDot ${
                  index === selectedIndex ? "heroDotActive" : ""
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
