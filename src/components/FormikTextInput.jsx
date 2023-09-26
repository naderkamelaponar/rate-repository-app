/** بسم الله الرحمن الرحيم */
import { StyleSheet } from "react-native";
import { useField } from "formik";
import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const styles = StyleSheet.create({
    errorText: {
      padding: 5,
      color: theme.colors.errorColor,
      fontSize: theme.fontSizes.subHead,
      fontWeight: theme.fontWeights.bold,
    },
    textInput: {
      borderCurve: 5,
      borderColor: showError ? theme.colors.errorColor : theme.colors.textBlack,
      borderWidth: 1,
      borderRadius: 5,
      fontSize: theme.fontSizes.subHead,
      padding: 5,
      height: 50,
    },
  });
  console.log("Show Error", showError);
  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={styles.textInput}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};
export default FormikTextInput;
