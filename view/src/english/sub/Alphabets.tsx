import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Sound from 'react-native-sound';
import {useNavigation} from '@react-navigation/native';

const alphabetsData = [
  {
    letter: 'A',
    name: 'Apple',
    image: require('../../../../assets/images/english/apple.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'B',
    name: 'Ball',
    image: require('../../../../assets/images/english/ball.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'C',
    name: 'Cat',
    image: require('../../../../assets/images/english/cat.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'D',
    name: 'Dog',
    image: require('../../../../assets/images/english/dog.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'E',
    name: 'Elephant',
    image: require('../../../../assets/images/english/egg.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'F',
    name: 'Fish',
    image: require('../../../../assets/images/english/fish.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'G',
    name: 'Grapes',
    image: require('../../../../assets/images/english/grapes.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'H',
    name: 'Hat',
    image: require('../../../../assets/images/english/hat.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'I',
    name: 'Ice Cream',
    image: require('../../../../assets/images/english/ice-cream.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'J',
    name: 'Jug',
    image: require('../../../../assets/images/english/jug.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'K',
    name: 'Kite',
    image: require('../../../../assets/images/english/kite.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'L',
    name: 'Lion',
    image: require('../../../../assets/images/english/lion.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'M',
    name: 'Mango',
    image: require('../../../../assets/images/english/mango.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'N',
    name: 'Nest',
    image: require('../../../../assets/images/english/nest.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'O',
    name: 'Orange',
    image: require('../../../../assets/images/english/orange.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'P',
    name: 'Parrot',
    image: require('../../../../assets/images/english/parrot.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'Q',
    name: 'Queen',
    image: require('../../../../assets/images/english/queen.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'R',
    name: 'Rabbit',
    image: require('../../../../assets/images/english/rabbit.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'S',
    name: 'Sun',
    image: require('../../../../assets/images/english/sun.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'T',
    name: 'Tiger',
    image: require('../../../../assets/images/english/tiger.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'U',
    name: 'Umbrella',
    image: require('../../../../assets/images/english/umbrella.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'V',
    name: 'Van',
    image: require('../../../../assets/images/english/van.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'W',
    name: 'Watch',
    image: require('../../../../assets/images/english/watch.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'X',
    name: 'Xylophone',
    image: require('../../../../assets/images/english/xylophone.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'Y',
    name: 'Yak',
    image: require('../../../../assets/images/english/yak.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'Z',
    name: 'Zebra',
    image: require('../../../../assets/images/english/zebra.png'),
    sound: 'buttonclick.mp3',
  },
];

// Function to play sound
const playSound = soundFile => {
  const sound = new Sound(soundFile, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Error loading sound:', error);
      return;
    }
    sound.play(() => sound.release()); // Play and release memory
  });
};

const Alphabets = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < alphabetsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/homebg1.jpg')}
      style={styles.background}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.home}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{color: 'white', marginLeft: 10}}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          {/* Shape Image */}
          <TouchableOpacity
            onPress={() => playSound(alphabetsData[currentIndex].sound)}>
            <View style={styles.box}>
              <Image
                source={alphabetsData[currentIndex].image}
                style={styles.bigImage}
              />
            </View>
          </TouchableOpacity>

          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 50,
                fontWeight: 20,
              }}>
              {alphabetsData[currentIndex].letter.toUpperCase()}
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.bigButton]}
              onPress={() => playSound(alphabetsData[currentIndex].sound)}>
              <Text style={styles.buttonText}>
                {alphabetsData[currentIndex].name.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        {currentIndex < alphabetsData.length - 1 && (
          <TouchableOpacity style={[styles.nextButton]} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

// Styles
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  home: {
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff',
    borderRadius: 15,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'row',
    gap: 60,
    alignItems: 'center',
  },
  box: {
    width: 225,
    height: 225,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigImage: {
    width: 150,
    height: 150,
  },
  button: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  bigButton: {
    backgroundColor: 'green',
  },
  nextButton: {
    backgroundColor: 'blue',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  footer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default Alphabets;
