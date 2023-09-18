/** بسم الله الرحمن الرحيم */
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import Text from "./Text";
import AppBar from "./AppBar";
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  appHeader: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appHeader}>Rate Repository Application ex 10.3</Text>
      <AppBar />

      <RepositoryList />
    </View>
  );
};

export default Main;
