import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('sign_in');
  }, 3000);
  return (
    <ImageBackground
      source={require('../../assets/splash.jpg')}
      resizeMode={'cover'}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.text}>This is the Splash d</Text>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#fff',
  },
});
