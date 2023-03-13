import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

       <Image source={require('./assets/angga.jpg')}
         style={{width: 200, height: 200}} />

      <Text>Profile</Text>
      <Text>Name : Angga Putra Andika </Text>
      <Text>Class : TI-21-PA </Text>
      <Text>NPM : 212310031 </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

