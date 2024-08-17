import React, { useCallback, useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgZoom from "lightgallery/plugins/zoom";
import { Button } from "@/components/ui/button";

const GalleryOfDetails = () => {
  const [seeAll, setSeeAll] = useState(false);
  const lightGallery = useRef<any>(null);
  const [items, setItems] = useState([
    {
      id: "1",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "2",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "3",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "4",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "5",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "6",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "7",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "8",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "9",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    {
      id: "10",
      size: "1400-800",
      src: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
      thumb: "https://i.ibb.co/3pMRKBj/ferrari-laferrari.webp",
    },
    // Add more items as needed
  ]);

  const addItem = useCallback(() => {
    setItems([
      ...items,
      {
        id: "11",
        size: "1400-800",
        src: "img-11.jpg",
        thumb: "thumb-11.jpg",
      },
    ]);
  }, [items]);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    // Determine the number of items to display
    const displayedItems = seeAll ? items : items.slice(0, 8);
    return displayedItems.map((item) => (
      <div
        key={item.id}
        data-lg-size={item.size}
        className="gallery-item"
        data-src={item.src}
      >
        <img className="" src={item.src} />
      </div>
    ));
  }, [items, seeAll]);

  useEffect(() => {
    if (lightGallery.current) {
      lightGallery.current.refresh();
    }
  }, [items]);

  return (
    <div>
      {/* <button onClick={addItem}>Add new item</button> */}
      <LightGallery
        plugins={[lgZoom]}
        elementClassNames="gallery-container !p-0"
        onInit={onInit}
      >
        {getItems()}
      </LightGallery>
      <div>
        <Button onClick={() => setSeeAll(!seeAll)} variant="outline" className="mt-5">
          {!seeAll ? "See All" : "See Less"}
        </Button>
      </div>
    </div>
  );
};

export default GalleryOfDetails;
