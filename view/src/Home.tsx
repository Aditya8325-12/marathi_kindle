import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Alert,
  BackHandler,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import useMusicStore from '../store/Store';

const Home = () => {
  const {stopMusic, playMusic} = useMusicStore();
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // Track if the screen is focused

  useEffect(() => {
    if (isFocused) {
      playMusic();

      const backAction = () => {
        Alert.alert(
          'Exit App',
          'Do you want to quit the app?',
          [
            {
              text: 'No',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: () => {
                stopMusic();
                BackHandler.exitApp();
              },
            },
          ],
          {cancelable: false},
        );
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove(); // Cleanup backHandler when screen unfocuses or unmounts
    }
  }, [isFocused]);

  const handleExitApp = () => {
    Alert.alert(
      'Exit App',
      'Do you want to quit the app?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            stopMusic();
            BackHandler.exitApp();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/homebg.jpg')}
          style={styles.backgroundImage}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={handleExitApp}>
              <Image
                source={require('../../assets/images/remove.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonrow}>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'rgb(255, 182, 25)'}]}
                onPress={() => {
                  navigation.navigate('mar');
                  stopMusic();
                }}>
                <Image
                  style={styles.sectionImage}
                  source={require('../../assets/images/letter.png')}
                />
                <Text style={styles.buttonText}>मराठी</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'rgb(27, 113, 156)'}]}
                onPress={() => {
                  navigation.navigate('math');
                  stopMusic();
                }}>
                <Image
                  style={styles.sectionImage}
                  source={require('../../assets/images/number.png')}
                />
                <Text style={styles.buttonText}>गणित</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonrow}>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: 'rgb(152, 63, 170)'}]}
                onPress={() => {
                  navigation.navigate('eng');
                  stopMusic();
                }}>
                <Image
                  style={styles.sectionImage}
                  source={require('../../assets/images/abc.png')}
                />
                <Text style={styles.buttonText}>इंग्रजी</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  icon: {
    width: 30,
    height: 32,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  buttonrow: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'semibold',
  },
  sectionImage: {
    width: 30,
    height: 30,
  },
});

export default Home;
