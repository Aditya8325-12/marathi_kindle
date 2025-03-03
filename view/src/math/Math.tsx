import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Math = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/back7.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.home}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{color: 'white', marginLeft: 10}}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonrow}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('number');
              }}
              style={[styles.button, {backgroundColor: 'rgb(240, 97, 62)'}]}>
              <Image
                style={styles.sectionImage}
                source={require('../../../assets/images/letter.png')}
              />
              <Text style={styles.buttonText}>संख्या</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('shape');
              }}
              style={[styles.button, {backgroundColor: 'rgb(91, 206, 143)'}]}>
              <Image
                style={styles.sectionImage}
                source={require('../../../assets/images/number.png')}
              />
              <Text style={styles.buttonText}>आकार</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonrow}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('currency');
              }}
              style={[styles.button, {backgroundColor: 'rgb(62, 142, 203)'}]}>
              <Image
                style={styles.sectionImage}
                source={require('../../../assets/images/abc.png')}
              />
              <Text style={styles.buttonText}>नोटांची ओळख</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Math;

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
    justifyContent: 'flex-start',
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
  home: {
    backgroundColor: 'green',
    paddingVertical: 6,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff',
    borderRadius: 15,
  },
});
