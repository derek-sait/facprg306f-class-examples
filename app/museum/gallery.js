"use client";

import { useEffect, useState } from "react";
import Artwork from "./artwork";

// asynchronous function that will retrieve
// an array of #n random artwork object IDs
async function getArtworkIDs() {
  try {
    // await fetch from API call
    const response = await fetch(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects"
    );
    if (!response.ok) {
      // error handling if the request fails...
      console.log(response.status);
    }
    // await data from json function
    const data = await response.json();
    // console.log(data);
    // create new array from raw data
    let shuffled = data.objectIDs;
    // Shuffle array pseudo-randomly
    shuffled = [...shuffled].sort(() => 0.5 - Math.random());
    // return sub-array with first n results from shuffled array
    const noOfResults = 10;
    shuffled = shuffled.slice(0, noOfResults);
    console.log(shuffled);
    return shuffled;
  } catch (error) {
    // error handling if our code crashes...
    console.log(error.message);
  }
}

// asynchronous function that will retrieve
// a single artwork object by ID number
async function getArtworkById(artId) {
  try {
    // await fetch from API call
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    );
    if (!response.ok) {
      console.log(response.status);
    }
    // await data from json function
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default function Gallery() {
  const [artworkIds, setArtworkIds] = useState([]);
  const [displayGallery, setDisplayGallery] = useState([]);

  // this useEffect function will gather the artwork IDs
  useEffect(() => {
    // open an anonymous async arrow function inside the useEffect function
    (async () => {
      // wait for the data from the getArtworkIDs function
      const artworkIdArray = await getArtworkIDs();
      // update the artwork ID array state
      setArtworkIds(artworkIdArray);
    })();
    // ^ the two parentheses () after the async function are important here
    // this will call the anonymous function that we have just declared
  }, []);
  // ^ because the dependency array is empty,
  // this useEffect function will only run once upon initialization


  // this useEffect is dependant upon the artworkIds state
  useEffect(() => {
    (async () => {
      // since this useEffect will also run upon initialization,
      // we must ensure there is usable data 
      if (artworkIds != null && artworkIds.length > 0) {
        // declare a gallery array
        let thisGallery = [];
        // loop through the artwork IDs
        for (let i = 0; i < artworkIds.length; i++) {
          // fetch artwork object data for each ID in the array
          let thisArt = await getArtworkById(artworkIds[i]);
          // add the artwork object to the gallery array
          thisGallery.push(thisArt);
        }
        console.log(thisGallery);
        // update the gallery display state with the new array of art objects
        setDisplayGallery(thisGallery);
      }
    })();
  }, [artworkIds]);
  // this useEffect depends upon the artworkIds state
  // the dependency array will request that this useEffect
  // code runs when the artworkIds state is updated.


  return (
    <section>
      {/* When the displayGallery state is updated, the page will re-render */}
      {displayGallery.map((art) => (
        <Artwork key={art?.objectID} artwork={art} />
      ))}


    </section>
  );
}
