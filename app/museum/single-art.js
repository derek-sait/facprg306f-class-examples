"use client";

import { useEffect, useState } from "react";
import Artwork from "./artwork";

export default function SingleArt() {

  const [singleArt, setSingleArt] = useState(null);

  async function getArtworkById(artId) {
    // this function uses the setSingleArt function
    // and therefore must be placed inside the Component code
    try {
      const response = await fetch(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
      );
      if (!response.ok) {
        console.log(response.status);
      }
      const data = await response.json();
      console.log(data);
      setSingleArt(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getArtworkById(7811);
  }, []);

  return (
  <section>
    {singleArt && (
        <Artwork artwork={singleArt} />
    )};
  </section>);
}
