/** بسم الله الرحمن الرحيم */
import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";
import Text from "./Text";
import AppBar from "./AppBar";
import SignIn from "./SignIn";
import { Route, Routes, Navigate } from "react-router-native";
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

      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SignIn />
    </View>
  );
};

export default Main;
