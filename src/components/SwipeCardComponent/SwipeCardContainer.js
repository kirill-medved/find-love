import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import SwipeCard from "./SwipeCard";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-native-draggable";
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  Text,
  Image,
} from "react-native";

const initialURI = [
  "https://bigpicture.ru/wp-content/uploads/2020/01/71715608_728411400955857_1867320004081534638_n-728x800.jpg",
  "https://img.icons8.com/pastel-glyph/2x/person-male.png",
  "https://factymira.ru/wp-content/uploads/2015/09/133.jpg",
];

const Users = [
  {
    id: "1",
    photos: [
      "https://bigpicture.ru/wp-content/uploads/2020/01/71715608_728411400955857_1867320004081534638_n-728x800.jpg",
      "https://img.icons8.com/pastel-glyph/2x/person-male.png",
      "https://factymira.ru/wp-content/uploads/2015/09/133.jpg",
    ],
  },
  {
    id: "2",
    photos: [
      "https://static.kulturologia.ru/files/u18476/Irina-Shayk.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRzmS2QWEgGzvL0jPBC7SetF34mVsv-EF_7Q&usqp=CAU",
      "https://s49.radikal.ru/i124/1208/f5/5e149cd44842.jpg",
    ],
  },
  {
    id: "3",
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT47RtLOOdJr9M0rdzeedFiu5_SM5o1WMIgJQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJl0NSd6Iqu9wq241gLJhACwjRH1CwFZi2CA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp50bRbUBxt6bjxdnkNz8FfMsR4_etNqR1CQ&usqp=CAU",
    ],
  },
  {
    id: "4",
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaOLkExORQfaskR3FPctZDHISCqit9TgV78Q&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOcrkb_0FRgy5k9g4dMUqeqi_CHQqkEfKq6A&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoCpgu2B-UMwQGFY3N1bVhDkVRBpWxtmjOlg&usqp=CAU",
    ],
  },
  {
    id: "5",
    photos: [
      "https://bigpicture.ru/wp-content/uploads/2020/01/71715608_728411400955857_1867320004081534638_n-728x800.jpg",
      "https://img.icons8.com/pastel-glyph/2x/person-male.png",
      "https://factymira.ru/wp-content/uploads/2015/09/133.jpg",
    ],
  },
  {
    id: "6",
    photos: [
      "https://static.kulturologia.ru/files/u18476/Irina-Shayk.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRzmS2QWEgGzvL0jPBC7SetF34mVsv-EF_7Q&usqp=CAU",
      "https://s49.radikal.ru/i124/1208/f5/5e149cd44842.jpg",
    ],
  },
  {
    id: "7",
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT47RtLOOdJr9M0rdzeedFiu5_SM5o1WMIgJQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJl0NSd6Iqu9wq241gLJhACwjRH1CwFZi2CA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRp50bRbUBxt6bjxdnkNz8FfMsR4_etNqR1CQ&usqp=CAU",
    ],
  },
  {
    id: "8",
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaOLkExORQfaskR3FPctZDHISCqit9TgV78Q&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOcrkb_0FRgy5k9g4dMUqeqi_CHQqkEfKq6A&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoCpgu2B-UMwQGFY3N1bVhDkVRBpWxtmjOlg&usqp=CAU",
    ],
  },
];

const SwipeCardContainer = (props) => {
  // get user screen height
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  // get user screen width
  const SCREEN_WIDTH = Dimensions.get("window").width;
  //to change images
  const [numberOfImage, setNumberOfImage] = useState(0);
  // to change user when you're swipe
  const [currentIndex, setCurrentIndex] = useState(0);

  const pan = useRef(new Animated.ValueXY()).current;
  //interpolates the card value before updating the property
  let rotate = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  //converts {x, y} into a useable translation transform
  let rorateAndTraslate = {
    transform: [{ rotate: rotate }, ...pan.getTranslateTransform()],
  };
  //interpolates the likePhoto value before updating the property
  const likeOpacity = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });
  //interpolates the dislikePhoto value before updating the property
  const dislikeOpacity = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 0],
    extrapolate: "clamp",
  });
  //interpolates the next cartd value before updating the property
  const nextCardOpacity = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  //appearance of the next card
  const nextCardScale = pan.x.interpolate({
    inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        pan.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(pan, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: false,
          }).start(() => {
            setCurrentIndex((prevCount) => prevCount + 1);
            setNumberOfImage(0);
            pan.setValue({ x: 0, y: 0 });
            console.log(currentIndex);
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(pan, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: false,
          }).start(() => {
            setCurrentIndex((prevCount) => prevCount + 1);
            setNumberOfImage(0);
            pan.setValue({ x: 0, y: 0 });
          });
        } else {
          Animated.spring(
            pan, // Auto-multiplexed
            { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
          ).start();
        }
      },
    })
  ).current;

  const renderUsers = () => {
    return Users.map((item, i) => {
      if (i < currentIndex) {
        return null;
      }
      if (i - 1 > currentIndex) return null;
      if (i == currentIndex) {
        return (
          <Animated.View
            key={item.id}
            style={[
              rorateAndTraslate,
              {
                position: "absolute",
                height: "100%",
              },
            ]}
            {...panResponder.panHandlers}
          >
            <SwipeCard
              setImage={setNumberOfImage}
              images={item.photos}
              numberOfImage={numberOfImage}
              lengthOfImages={item.photos.length}
              likeOpacity={likeOpacity}
              dislikeOpacity={dislikeOpacity}
            />
          </Animated.View>
        );
      } else {
        return (
          <Animated.View
            key={item.id}
            style={[
              {
                opacity: nextCardOpacity,
                transform: [{ scale: nextCardScale }],
                position: "absolute",
                height: "100%",
              },
            ]}
            {...panResponder.panHandlers}
          >
            <SwipeCard
              setImage={setNumberOfImage}
              images={item.photos}
              numberOfImage={0}
            />
          </Animated.View>
        );
      }
    }).reverse();
  };
  return renderUsers();
};

export default SwipeCardContainer;
