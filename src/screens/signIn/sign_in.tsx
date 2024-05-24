import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import RoundedButton from '../../components/RoundedButton';

const SignIn = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <Image
          source={require('../../assets/sign_in.png')}
          resizeMode="cover"
          style={{width: '100%', height: '100%', objectFit: 'cover'}}
        />
      </View>
      <View style={{flex: 0.5}}>
        <Text style={styles.headerText}>Hello</Text>
        <Text style={styles.text}>Welcome to the e-commerce application</Text>
        <View style={styles.buttonContainer}>
          <RoundedButton
            label="Sign Up"
            actionFunction={() => console.log('this is a test')}
          />
          <RoundedButton label="Log In" border={true} />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 10,
  },
});
