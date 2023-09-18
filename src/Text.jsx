/** بسم الله الرحمن الرحيم */
import { Text as NativeText, StyleSheet } from "react-native";
import theme from "./theme";
const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.textBlack,
  },
  fontSubHead: {
    fontSize: theme.fontSizes.subHead,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});
const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subHead" && styles.fontSubHead,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];
  return <NativeText style={textStyle} {...props} />;
};
export default Text;
