/** بسم الله الرحمن الرحيم */
import { StyleSheet } from "react-native";
import { useField } from "formik";
import TextInput from "./TextInput";
import Text from "./Text";
const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});
const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  console.log("name,props",field.value)
  const showError = meta.touched && meta.error;
  return (
    <>
      <TextInput
        {...useField}
        {...props}
        onChange={(value) => helpers.setValue(value)}
        
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};
export default FormikTextInput;
