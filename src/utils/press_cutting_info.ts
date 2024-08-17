import cardImage1 from "@/assets/pressCutting/cardImage1.jpeg";
import cardImage2 from "@/assets/pressCutting/cardImage2.jpeg";
import { StaticImageData } from "next/image";

type cardType = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

const carsInfo: cardType[] = [
  {
    image: cardImage2,
    title:
      "EXCLUSIVE INTERVIEW WITH COLLECTING CARS FOUNDER, EDWARD LOVETT - THE DAILY VROOM",
    description:
      "The Daily Vroom Hey there, Vroomers! Rise and shine—today's Daily Vroom is a bumper issue",
    link: "https://thedailyvroom.com/newsletter/exclusive-interview-with-collecting-cars-founder-edward-lovett/",
  },
  {
    image: cardImage1,
    title:
      "THE MÉTISSE STEVE MCQUEEN DESERT RACER IS A MODERN REPLICA OF THE ACTOR'S FAVORITE RIDE",
    description:
      "After customizing a 1967 Métisse Mk III with the most rugged components available at the time, McQueen described it as",
    link: "https://www.autoevolution.com/news/the-metisse-steve-mcqueen-desert-racer-is-a-modern-replica-of-the-actor-s-favorite-ride-235982.html",
  },
  {
    image: cardImage2,
    title:
      "‘WORLD’S FIRST SUPERCAR’ HEADS TO AUCTION AS PART OF ICONIC COLLECTION",
    description:
      "A remarkably rare 1955 Mercedes-Benz 300 SL Gullwing, often cited as ‘the world’s first supercar’, is heading to auction as part of an extensive collection of performance icons spanning the 1950s to the 1990s. This event, which will feature some of the most collectible cars of all time, is expected to attract significant attention from car enthusiasts and collectors worldwide. The 300 SL Gullwing, one of only around 1,400 examples built, is poised to achieve a sale price exceeding £1 million (NZ",
    link: "https://autos.yahoo.com/world-first-supercar-heads-auction-183000708.html",
  },
  {
    image: cardImage1,
    title:
      "SNAG THESE BERTONE BLUEPRINTS AND START YOUR AUTOMOTIVE ART COLLECTION - HAGERTY MEDIA",
    description:
      "14 vintage drawings from a long-term Bertone employee are up for auction. Miura, Stratos, and various concept blueprints could be yours.",
    link: "https://www.hagerty.com/media/design/snag-these-bertone-blueprints-and-start-your-automotive-art-collection/",
  },
  {
    image: cardImage2,
    title:
      "BMW-SWAPPED 2CV VAN IS FRANCE'S HOTTEST BAGUETTE BRINGER - HAGERTY MEDIA",
    description:
      "This gloriously patinated 1969 Citroën 2CV Fourgonette is hiding a speedy secret.",
    link: "https://www.hagerty.com/media/news/bmw-swapped-2cv-van-is-frances-hottest-baguette-bringer/",
  },
  {
    image: cardImage1,
    title:
      "THE UNUSUAL MONTEVERDI SAHARA 4X4 FROM SWITZERLAND (AND AMERICA)",
    description:
      "This is an original Monteverdi Sahara from 1978, it's one of just 30 that were made by the little-known Swiss automaker, with the intention of competing",
    link: "https://silodrome.com/monteverdi-sahara/",
  },
  {
    image: cardImage2,
    title:
      "‘SOUGHT-AFTER MODERN CLASSIC’ WITH SHOCK TOP SPEED & PORSCHE PARTS HITS AUCTION",
    description:
      "AN iconic “modern classic” motor with a surprisingly high top speed could be yours. The stunning set of wheels, which is currently being sold by the Collecting Cars auction house, boast",
    link: "https://www.thesun.co.uk/motors/27014482/modern-classic-car-audi-rs2-avant-porsche-price/",
  },
];


export default carsInfo