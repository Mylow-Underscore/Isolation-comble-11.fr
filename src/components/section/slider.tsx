'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ProgressSlider,
  SliderContent,
  SliderWrapper,
  SliderBtnGroup,
  SliderBtn,
} from '@/components/ui/progress-slider';

const slides = [
  {
    value: 'facade',
    src: '/img/accueil/facade-carcassonne-peinture-travaux-aude-mur.jpg',
    title: 'Façade',
    desc: 'Peinture et travaux de façade dans l\'Aude.',
  },
  {
    value: 'hydrofuge-1',
    src: '/img/accueil/hydrofuger-toiture-protege-tuile-canal-01.jpg',
    title: 'Hydrofugation',
    desc: 'Protection hydrofuge de toiture tuile canal.',
  },
  {
    value: 'hydrofuge-2',
    src: '/img/accueil/hydrofuger-aude-tuile-canal-toiture-03.jpg',
    title: 'Toiture',
    desc: 'Hydrofugation toiture dans l\'Aude.',
  },
  {
    value: 'isolation-1',
    src: '/img/accueil/isolation-laine-roche-soufflage-combles-01.jpg',
    title: 'Isolation',
    desc: 'Soufflage laine de roche dans les combles.',
  },
  {
    value: 'isolation-2',
    src: '/img/accueil/isoler-aude-jetrock-economie-energie-02.jpg',
    title: 'Économies',
    desc: 'Isolation Jetrock pour économies d\'énergie.',
  },
  {
    value: 'isolation-3',
    src: '/img/accueil/isoler-combles-fermette-traditionnel-charpente-03.jpg',
    title: 'Combles',
    desc: 'Isolation combles fermette et charpente traditionnelle.',
  },
  {
    value: 'faitage-1',
    src: '/img/accueil/faitage-refection-toiture-remplacement-tuile-01.jpg',
    title: 'Faîtage',
    desc: 'Réfection toiture et remplacement de tuiles.',
  },
  {
    value: 'faitage-2',
    src: '/img/accueil/faitage-carcassonne-sec-toiture-charpente-02.jpg',
    title: 'Charpente',
    desc: 'Faîtage sec à Carcassonne, toiture et charpente.',
  },
  {
    value: 'faitage-3',
    src: '/img/accueil/faitage-aude-renovation-charpente-canal-03.jpg',
    title: 'Rénovation',
    desc: 'Rénovation charpente et canal dans l\'Aude.',
  },
];

export default function Header() {
  return (
        <div id="slideraccueil">
          <ProgressSlider className='h-180' vertical={false} activeSlider="facade" duration={5000}>

            <SliderContent>
              {slides.map((slide, index) => (
                <SliderWrapper key={slide.value} value={slide.value}>
                  <Image
                    className="w-full h-full object-cover"
                    src={slide.src}
                    alt={slide.desc}
                    fill
                    priority={index === 0}
                  />
                </SliderWrapper>
              ))}
            </SliderContent>

            <SliderBtnGroup className="absolute bottom-0 text-black bg-white/40 backdrop-blur-md overflow-hidden grid grid-cols-3 md:grid-cols-9 w-full">
              {slides.map((slide) => (
                <SliderBtn
                  key={slide.value}
                  value={slide.value}
                  className="relative text-left cursor-pointer border-r"
                  progressBarClass="bg-white h-full"
                >
                  <div className="p-4 w-full">
                    <h3 className="relative p-0.5 text-lg font-bold px-2 rounded-full w-fit bg-gray-900 text-white mb-1">{slide.title}</h3>
                    <p className="text-xs font-medium line-clamp-2">{slide.desc}</p>
                  </div>
                </SliderBtn>
              ))}
            </SliderBtnGroup>

          </ProgressSlider>
        </div>
  );
}