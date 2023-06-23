import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Input from '../components/Input';

const LoginScreen = () => {
  const [isShow, setIsShow] = useState(false);

  const onShowChange = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImg}
        source={require('../assets/images/main_bg.jpg')}
      >
        <View style={styles.form}>
          <Text style={styles.title}>SignIn</Text>
          <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <Input
              placeholder={'Email'}
              placeholderTextColor={'#BDBDBD'}
              propStyles={{ marginBottom: 16 }}
            />
          </KeyboardAvoidingView>
          <View style={styles.passwordBox}>
            <Input
              placeholder={'Password'}
              placeholderTextColor={'#BDBDBD'}
              secureTextEntry={!isShow}
            />
            <TouchableOpacity style={styles.isShowBtn} onPress={onShowChange}>
              <Text style={styles.isShowBtnText}>
                {isShow ? 'Hide' : 'Show'}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>SignUp</Text>
          </TouchableOpacity>
          <Text style={styles.helpText}>Already have an account? Sign In</Text>
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
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#fff',
    position: 'relative',
  },
  title: {
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
    marginBottom: 33,
  },
  passwordBox: {
    position: 'relative',
    marginBottom: 43,
  },
  isShowBtn: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    padding: 8,
    top: 0,
    bottom: 0,
  },
  isShowBtnText: {},
  button: {
    marginHorizontal: 'auto',
    backgroundColor: '#FF6C00',
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 19,
  },
  helpText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#1B4371',
  },
});
export default LoginScreen;
