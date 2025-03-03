import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splesh = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Timer for 5 seconds
    const timer = setTimeout(() => {
      navigation.navigate('home'); // Replace with your home page route
    }, 2000);

    // Clear the timer if the component unmounts before time is up
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.main}>
      <Image
        style={styles.image}
        source={require('../../assets/images/owl.png')}
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.marathiText}>मराठी</Text>
        <Text style={styles.englishText}>Kindle</Text>
      </View>
    </View>
  );
};

export default Splesh;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  marathiText: {
    color: '#FFD700', // Golden color for Marathi text
    fontSize: 32,
    fontWeight: 'bold',
    marginRight: 10,
  },
  englishText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
