/** بسم الله الرحمن الرحيم */
import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  console.log(error,styles)
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
