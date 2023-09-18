import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
    fontSize:21,
    textAlign:'center',
    margin:10,
    color:"#"
  }}>بسم الله الرحمن الرحيم</Text>
      <StatusBar style="auto" />
      <Main />
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
