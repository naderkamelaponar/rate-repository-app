/** بسم الله الرحمن الرحيم */
import { SafeAreaView, ScrollView, View, StyleSheet } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "./theme";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,

    flexDirection: "row",
    // ...
  },
  linkItemView: {
    flexGrow: 2,
    width: "auto",
    textAlign: "center",
    padding: 5,
  },
  linkItemText: {
    fontSize: theme.fontSizes.super,
  },
  mainView: {
    flexDirection: "row",
  },
  sv: {
    marginVertical: 10,
    width: 500,
  },

  // ...
});

const AppBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.sv} horizontal={true}>
        <View style={styles.mainView}>
          <Link to="/">
            <View style={styles.linkItemView}>
              <Text
                style={styles.linkItemText}
                color="textSecondary"
                fontSize="subheading"
              >
                Repositories
              </Text>
            </View>
          </Link>
          <Link to="/signin">
            <View style={styles.linkItemView}>
              <Text
                style={styles.linkItemText}
                color="textSecondary"
                fontSize="subheading"
              >
                Sign in
              </Text>
            </View>
          </Link>
          <View style={styles.linkItemView}>
            <Text
              style={styles.linkItemText}
              color="textSecondary"
              fontSize="subheading"
            >
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppBar;
