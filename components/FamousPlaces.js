import React from "react";
import Link from "next/link";
import AgraImage from '../public/images/india.jpg';
import ChinaImage from '../public/images/china.jpg';
import PeruImage from '../public/images/peru.jpg';
import RomeImage from '../public/images/rome.jpg';
import BrazilImage from '../public/images/brazil.jpg';
import PetraImage from '../public/images/petra.jpg';
import MexicoImage from '../public/images/maxico.jpg';


//add the localtion
const places = [
  {
    name: "Taj Mahal Agra, India",
    image: AgraImage,
    url: "/location/agra-1279259.html",
  },
  {
    name: "Great Wall of China, Beijing, China ",
    image: ChinaImage,
    url: "/location/beijing-1816670.html",
  },
  {
    name: "Machu Pichu cusco, Peru",
    image: PeruImage,
    url: "/location/cusco-3941583.html",
  },
  {
    name: "The Colosseum Rome, Italy",
    image: RomeImage,
    url: "/location/rome-4219762.html",
  },
  {
    name: "Christ the Redeemer Statue, Brazil",
    image: BrazilImage,
    url: "/location/rio-de-janeiro-3451189.html",
  },
  {
    name: "A rock cut past Petra, Jordan",
    image: PetraImage,
    url: "/location/petra-246008.html",
  },
  {
    name: "Chichén Itzá Yucatán,Mexico",
    image: MexicoImage,
    url: "/location/Estado-de-Yucatán-3514211.html",
  },
];



export default function FamousPlaces() {
  console.log(MexicoImage);
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url}>
                <a>
                  <div className="places__image-wrapper">
                    <img className="search_box_seven_wonders_img" src={place.image.src} layout="fill" ></img>
                  </div>

                  <span>{place.name}</span>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
