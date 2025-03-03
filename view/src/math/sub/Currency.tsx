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

// Array of shapes with images and sound files
const shapesData = [
  {
    name: '10 ruppes',
    image: require('../../../../assets/images/ruppes/10.png'),
    sound: 'buttonclick.mp3',
  },
  {
    name: '20 ruppes',
    image: require('../../../../assets/images/ruppes/20.png'),
    sound: '20rupees.mp3',
  },
  {
    name: '50 ruppes',
    image: require('../../../../assets/images/ruppes/50.png'),
    sound: 'buttonclick.mp3',
  },
  {
    name: '100 ruppes',
    image: require('../../../../assets/images/ruppes/100.png'),
    sound: 'buttonclick.mp3',
  },
  {
    name: '500 ruppes',
    image: require('../../../../assets/images/ruppes/500.jpg'),
    sound: 'buttonclick.mp3',
  },
  {
    name: '2000 ruppes',
    image: require('../../../../assets/images/ruppes/2000.jpg'),
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

const Currency = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < shapesData.length - 1) {
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
            onPress={() => playSound(shapesData[currentIndex].sound)}>
            <View style={styles.box}>
              <Image
                source={shapesData[currentIndex].image}
                style={styles.bigImage}
              />
            </View>
          </TouchableOpacity>

          {/* Shape Name & Button */}
          <TouchableOpacity
            style={[styles.button, styles.bigButton]}
            onPress={() => playSound(shapesData[currentIndex].sound)}>
            <Text style={styles.buttonText}>
              {shapesData[currentIndex].name.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        {currentIndex < shapesData.length - 1 && (
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
    gap: 30,
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

export default Currency;
