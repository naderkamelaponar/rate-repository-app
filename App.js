import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from './src/Main';
import theme from './src/theme';
export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    majisty:{
    padding:1,
    margin:1,
    fontSize:theme.fontSizes.majisty,
    fontWeight:theme.fontWeights.majisty,
    color:theme.colors.majisty,
    fontFamily:theme.fonts.majisty
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.majisty}>بسم الله الرحمن الرحيم</Text>
      <NativeRouter>
      <Main />
      </NativeRouter>
      
      <StatusBar style="auto" />
      
    </View>
    
  );
}


