import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default function SwipeCardScreen() {

  const handleSwipedLeft = () => {
    console.log('swiped left');
  }

  const handleSwipedRight = () => {
    console.log('swiped right');
  }

  const handleSwipedTop = () => {
    console.log('swiped up');
  }



  return (
    <View style={styles.container}>
    <Swiper
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          )
        }}
        onSwipedLeft={handleSwipedLeft}
        onSwipedRight={handleSwipedRight}
        onSwipedTop={handleSwipedTop}
        onSwiped={(cardIndex) => {console.log(cardIndex)}}
        onSwipedAll={() => {console.log('onSwipedAll')}}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize= {3}
        disableBottomSwipe={true}>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});