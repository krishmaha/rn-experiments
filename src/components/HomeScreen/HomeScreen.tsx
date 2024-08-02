import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Button, View } from 'react-native';
import React from 'react';
import { RootStackParamList } from '../../navigators';

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
    return (
      <View>
        <Button
          title="Go to SwipeCardScreen"
          onPress={() =>
            navigation.navigate('SwipeCardScreen')
          }
        />
        <Button
          title="Go to LocationAutoCompleteScreen"
          onPress={() =>
            navigation.navigate('LocationAutoComplete')
          }
        />
      </View>
    );
};

export default HomeScreen;