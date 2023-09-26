/** بسم الله الرحمن الرحيم */
import { Formik } from "formik";
import FormikTextInput from "./components/FormikTextInput";
import { View, Text, StyleSheet, Pressable } from "react-native";
import theme from "./theme";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
const SignIn = () => {
  const styles = StyleSheet.create({
    container: {
      borderCurve: 5,
      borderColor: theme.colors.textBlack,
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      height: 250,
    },
    mainView: {
      flex: 1,
      width: 500,
      padding: 5,
    },
    pressStyle: {
      borderCurve: 5,
      borderColor: theme.colors.bgPrimary,
      borderWidth: 1,
      backgroundColor: theme.colors.bgPrimary,
      color: theme.colors.textBlack,
      borderRadius: 5,
      alignItems: "center",
      fontSize: theme.fontSizes.super,
      padding: 5,
      height: 50,
    },
    pressText: {
      fontSize: theme.fontSizes.super,
      color: theme.colors.textWhite,
      textAlign: "justify",
      alignContent: "center",
      padding: 5,
    },
  });

  const onSubmit = (v) => {
    console.log("VCVV", v);
  };
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
    >
      {() => (
        <View style={styles.container}>
          <View style={styles.mainView}>
            <FormikTextInput
              style={styles.inputText}
              name="username"
              placeholder="User name"
            />
          </View>
          <View style={styles.mainView}>
            <FormikTextInput
              style={styles.inputText}
              name="password"
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.mainView}>
            <Pressable style={styles.pressStyle} onPress={onSubmit}>
              <Text style={styles.pressText}>Sign In</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
