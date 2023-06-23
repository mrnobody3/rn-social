import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  propStyles,
}) => {
  return (
    <TextInput
      style={[styles.input, propStyles]}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={placeholderTextColor}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    color: '#000000',
    height: 50,
    paddingHorizontal: 18,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
});
export default Input;
