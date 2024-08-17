

import cardImage1 from "@/assets/ourJourneyPage/cardImage1.jpg";
import { StaticImageData } from "next/image";

interface SliderArticleItem {
    id: number;
    image: StaticImageData;
    title: string;
    description: string;
    link: string;
  }

 const sliderAritcle:SliderArticleItem[] = [
    {
        id: 1,
        image:cardImage1 ,
        title: "THE MWVMNW COLLECTION",
        description: "The 9th collection sale on our platform sees us sell the most expensive car we have ever offered, and with a total of over 5.4 million worth sold in one night.",
        link: "#"
    },
    {
        id: 2,
        image:cardImage1 ,
        title: "OUR BIGGEST EVER COFFEE RUN",
        description: "Our Coffee Run at Bicester Heritage welcomed over 2,000 cars and 5,000 people from our community.",
        link: "#"
    },
    {
        id: 3,
        image:cardImage1 ,
        title: "THE SMOKING TIRE PODCAST",
        description: "Chris Harris and Edward Lovett featured on Matt Farah's podcast.",
        link: "#"
    },
    {
        id: 4,
        image:cardImage1 ,
        title: "CHRIS HARRIS DRIVES THE ALL-NEW PORSCHE 911 (992) GT3 RS",
        description: "Find out what Chris thinks about the 992 generation RS as he takes it around Silverstone and has a proper peek around the bodywork!",
        link: "#"
    },
    {
        id: 5,
        image:cardImage1 ,
        title: "THE MWVMNW COLLECTION",
        description: "The 9th collection sale on our platform sees us sell the most expensive car we have ever offered, and with a total of over 5.4 million worth sold in one night.",
        link: "#"
    },
    {
        id: 6,
        image:cardImage1 ,
        title: "OUR BIGGEST EVER COFFEE RUN",
        description: "Our Coffee Run at Bicester Heritage welcomed over 2,000 cars and 5,000 people from our community.",
        link: "#"
    },
]

export default sliderAritcle
