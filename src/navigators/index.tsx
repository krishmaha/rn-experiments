import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import SwipeCardScreen from '../components/SwipeCardScreen/SwipeCardScreen';
import LocationAutoComplete from '../components/LocationAutoComplete/LocationAutoComplete';

export type RootStackParamList = {
  HomeScreen: undefined;
  SwipeCardScreen: undefined;
  LocationAutoComplete: undefined;
}

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="SwipeCardScreen" component={SwipeCardScreen} />
        <Stack.Screen name="LocationAutoComplete" component={LocationAutoComplete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;