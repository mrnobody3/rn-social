import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Platform, TextInput, ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.img} source={require("./assets/images/main_bg.jpg")}>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput style={styles.input} />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  img: {
    flex: 1,
    resizeMode: "cover"
  },
  input: {
    height:40,
    borderWidth: 1,
    borderColor: "#121212"
}
});
