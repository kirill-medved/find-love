import { Dimensions } from "react-native";
import SwipeCard from "./SwipeCard";
import React, { useState } from "react";

const initialURI = [
  "https://bigpicture.ru/wp-content/uploads/2020/01/71715608_728411400955857_1867320004081534638_n-728x800.jpg",
  "https://img.icons8.com/pastel-glyph/2x/person-male.png",
  "https://lh3.googleusercontent.com/proxy/-QRqLJGT_NEEyq1Bs1GWW9B2YbvJvU9E3FWmnWz32lFnONeAyIYe-fo0bJPctVD0a555XfhhF5KmMe8f0Jb5IqlTEDi6LfWCGMWU8Tf-OFnKVnpOm8wLARQ",
];

const SwipeCardContainer = (props) => {
  const [numberOfImage, setNumberOfImage] = useState(0);
  const lengthOfImages = initialURI.length;
  return (
    <SwipeCard
      setImage={setNumberOfImage}
      images={initialURI}
      numberOfImage={numberOfImage}
      lengthOfImages={lengthOfImages}
    />
  );
};

export default SwipeCardContainer;
