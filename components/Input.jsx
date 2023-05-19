import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ placeholder, placeholderTextColor }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    color: '#000',
    height: 20,
    padding: 18,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
});
export default Input;
