import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImg} source={require('../assets/images/main_bg.jpg')}>
        <View style={styles.box}>
          <Text>Sign In</Text>
          <TextInput style={styles.input} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  bgImg: {
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
  },
  box: {
    minHeight: 100,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#fff',
    position: 'relative',
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
});

export default RegistrationScreen;
