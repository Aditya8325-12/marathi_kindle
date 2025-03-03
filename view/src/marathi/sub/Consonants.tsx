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
    letter: 'क',
    name: 'कमळ',
    englishName: 'Lotus',
    image: require('../../../../assets/images/marathi/lotus.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ख',
    name: 'खरगोश',
    englishName: 'Rabbit',
    image: require('../../../../assets/images/marathi/rabbit.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ग',
    name: 'गुलाब',
    englishName: 'Rose',
    image: require('../../../../assets/images/marathi/rose.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'घ',
    name: 'घड्याळ',
    englishName: 'Clock',
    image: require('../../../../assets/images/marathi/clock.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'च',
    name: 'चंद्र',
    englishName: 'Moon',
    image: require('../../../../assets/images/marathi/moon.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'छ',
    name: 'छत्री',
    englishName: 'Umbrella',
    image: require('../../../../assets/images/marathi/umbrella.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ज',
    name: 'जिरा',
    englishName: 'Cumin',
    image: require('../../../../assets/images/marathi/cumin.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'झ',
    name: 'झाड',
    englishName: 'Tree',
    image: require('../../../../assets/images/marathi/tree.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ट',
    name: 'टमाटर',
    englishName: 'Tomato',
    image: require('../../../../assets/images/marathi/tomato.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ठ',
    name: 'ठिपका',
    englishName: 'Dot',
    image: require('../../../../assets/images/marathi/dot.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ड',
    name: 'डमरू',
    englishName: 'Small Drum',
    image: require('../../../../assets/images/marathi/drum.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ढ',
    name: 'ढोल',
    englishName: 'Big Drum',
    image: require('../../../../assets/images/marathi/bigdrum.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'त',
    name: 'तराजू',
    englishName: 'Weighing Scale',
    image: require('../../../../assets/images/marathi/weighing-machine.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'थ',
    name: 'थंड',
    englishName: 'Cold',
    image: require('../../../../assets/images/marathi/cold.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'द',
    name: 'दरवाजा',
    englishName: 'Door',
    image: require('../../../../assets/images/marathi/door.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ध',
    name: 'धनुष्य',
    englishName: 'Bow (Weapon)',
    image: require('../../../../assets/images/marathi/bowl.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'प',
    name: 'पंखा',
    englishName: 'Fan',
    image: require('../../../../assets/images/marathi/air.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'फ',
    name: 'फूल',
    englishName: 'Flower',
    image: require('../../../../assets/images/marathi/flower.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ब',
    name: 'बकरी',
    englishName: 'Goat',
    image: require('../../../../assets/images/marathi/goat.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'भ',
    name: 'भोपळा',
    englishName: 'Pumpkin',
    image: require('../../../../assets/images/marathi/pumpkin.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'म',
    name: 'माकड',
    englishName: 'Monkey',
    image: require('../../../../assets/images/marathi/monkey.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'य',
    name: 'यज्ञ',
    englishName: 'Fire Ritual',
    image: require('../../../../assets/images/marathi/yagna.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'र',
    name: 'रथ',
    englishName: 'Chariot',
    image: require('../../../../assets/images/marathi/chariot.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ल',
    name: 'लाल',
    englishName: 'Red',
    image: require('../../../../assets/images/marathi/circle.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'व',
    name: 'वाटी',
    englishName: 'Bowl',
    image: require('../../../../assets/images/marathi/bowl.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'श',
    name: 'शंख',
    englishName: 'Conch',
    image: require('../../../../assets/images/marathi/sea-snail.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ष',
    name: 'षडरंगी',
    englishName: 'Multicolored',
    image: require('../../../../assets/images/marathi/color-wheel.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'स',
    name: 'सूर्य',
    englishName: 'Sun',
    image: require('../../../../assets/images/marathi/sun.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ह',
    name: 'हत्ती',
    englishName: 'Elephant',
    image: require('../../../../assets/images/marathi/elephant.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ळ',
    name: 'ळंगडी',
    englishName: 'Hopscotch (Game)',
    image: require('../../../../assets/images/marathi/hopscotch.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'क्ष',
    name: 'क्षत्रिय',
    englishName: 'Warrior',
    image: require('../../../../assets/images/marathi/swordsman.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ज्ञ',
    name: 'ज्ञान',
    englishName: 'Knowledge',
    image: require('../../../../assets/images/marathi/book.png'),
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

const Consonants = () => {
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

export default Consonants;
