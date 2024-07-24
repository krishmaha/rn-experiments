import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Button } from 'react-native';

type RootStackParamList = {
    HomeScreen: undefined;
    SwipeCardScreen: undefined;
}

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
    return (
      <Button
        title="Go to SwipeCardScreen"
        onPress={() =>
          navigation.navigate('SwipeCardScreen')
        }
      />
    );
};

export default HomeScreen;