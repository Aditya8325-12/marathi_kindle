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
    letter: 'अ',
    name: 'अननस',
    englishName: 'Pineapple',
    image: require('../../../../assets/images/marathi/pineapple.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'आ',
    name: 'आंबा',
    englishName: 'Mango',
    image: require('../../../../assets/images/marathi/mango.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'इ',
    name: 'इमली',
    englishName: 'Tamarind',
    image: require('../../../../assets/images/marathi/tamarind.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ई',
    name: 'ईडलिंबू',
    englishName: 'Eagle',
    image: require('../../../../assets/images/marathi/lemon.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'उ',
    name: 'उंट',
    englishName: 'Camel',
    image: require('../../../../assets/images/marathi/camel.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ऊ',
    name: 'ऊस',
    englishName: 'Sugarcane',
    image: require('../../../../assets/images/marathi/sugar-cane.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ए',
    name: 'एखादा',
    englishName: 'One (Something)',
    image: require('../../../../assets/images/marathi/problem.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ऐ',
    name: 'ऐनक',
    englishName: 'Glasses (Spectacles)',
    image: require('../../../../assets/images/marathi/glasses.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'ओ',
    name: 'ओंबट',
    englishName: 'Sour',
    image: require('../../../../assets/images/marathi/emoji.png'),
    sound: 'buttonclick.mp3',
  },
  {
    letter: 'औ',
    name: 'औषध',
    englishName: 'Medicine',
    image: require('../../../../assets/images/marathi/drugs.png'),
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

const Vowels = () => {
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

export default Vowels;
