/** بسم الله الرحمن الرحيم */
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      {" "}
      <Pressable
        onPress={() => {
          console.log("Repositories");
        }}
      >
        <Text color="textSecondary" fontSize="subheading">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
