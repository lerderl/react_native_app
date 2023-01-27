import Remo from './assets/remo.png'
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Clubs from './components/Clubs';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <TextInput>Open up App.js to start working on your app!</TextInput>
    //   <StatusBar style="auto" />
    // </View>
    <ScrollView style={{ padding: 50 }}>
      <Text>Clubs</Text>
      <View>
        <Text>Season</Text>
        <Image
          // source={{
          //   uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          // }}
          source={Remo}
          style={{width: 200, height: 200, }}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="Enter club name"
        />
      </View>
      <Clubs clubName = 'Remo stars' state = 'Osun' />
      <Clubs clubName = 'Bendel' state = 'Edo' />
      <Clubs clubName = 'Akwa United' state = 'Akwa-Ibom' />
      <StatusBar style="auto" />
    </ScrollView>
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
