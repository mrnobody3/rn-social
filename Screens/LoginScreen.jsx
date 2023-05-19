import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Input from '../components/Input';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImg}
        source={require('../assets/images/main_bg.jpg')}
      >
        <View style={styles.form}>
          <Input placeholder={'Email'} placeholderTextColor={'#BDBDBD'} />
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
  form: {
    minHeight: 549,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#fff',
    position: 'relative',
  },
});
export default LoginScreen;
