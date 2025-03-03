import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../src/Home';
import Math from '../src/math/Math';
import English from '../src/english/English';
import Marathi from '../src/marathi/Marathi';
import Splesh from './Splesh';
import Shape from '../src/math/sub/Shape';
import Numbers from '../src/math/sub/Numbers';
import Currency from '../src/math/sub/Currency';
import {shallow} from 'zustand/shallow';
import Alphabets from '../src/english/sub/Alphabets';
import Vowels from '../src/marathi/sub/Vowels';
import Consonants from '../src/marathi/sub/Consonants';
const stack = createStackNavigator();
const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <stack.Navigator
        initialRouteName="splesh"
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="splesh" component={Splesh} />
        <stack.Screen name="home" component={Home} />
        <stack.Screen name="math" component={Math} />
        <stack.Screen name="eng" component={English} />
        <stack.Screen name="mar" component={Marathi} />
        <stack.Screen name="shape" component={Shape} />
        <stack.Screen name="number" component={Numbers} />
        <stack.Screen name="currency" component={Currency} />
        <stack.Screen name="alphabets" component={Alphabets} />
        <stack.Screen name="vowels" component={Vowels} />
        <stack.Screen name="consonants" component={Consonants} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatior;
