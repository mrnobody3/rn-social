import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Add from '../assets/icons/share/add.svg';

const RegistrationScreen = () => {
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
          <View style={styles.avatarBox}>
            <TouchableHighlight style={styles.btnAdd}>
              <View>
                <Add width={25} height={25} />
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.title}>SignUp</Text>
          <TextInput
            style={styles.input}
            placeholder="Login"
            placeholderTextColor="#BDBDBD"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#BDBDBD"
          />
          <View style={styles.passwordBox}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!isShow}
              placeholderTextColor="#BDBDBD"
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
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#fff',
    position: 'relative',
  },
  avatarBox: {
    position: 'absolute',
    alignSelf: 'center',
    width: 120,
    height: 120,
    top: -60,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  btnAdd: {
    position: 'absolute',
    right: -12.5,
    bottom: 14,
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
  input: {
    height: 50,
    paddingHorizontal: 18,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 16,
  },
  passwordBox: {
    position: 'relative',
    marginBottom: 43,
  },
  passwordInput: {
    height: 50,
    paddingHorizontal: 18,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  isShowBtn: {
    position: 'absolute',
    right: 16,
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

export default RegistrationScreen;
