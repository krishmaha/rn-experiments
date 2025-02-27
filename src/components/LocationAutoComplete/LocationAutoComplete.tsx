import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const LocationAutoComplete = () => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en',
        }}
        onPress={(data, details = null) => console.log(data)}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 32,
    backgroundColor: '#ecf0f1',
  },
});

export default LocationAutoComplete;
