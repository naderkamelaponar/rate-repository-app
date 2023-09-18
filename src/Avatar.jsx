/** بسم الله الرحمن الرحيم */
import { Image, StyleSheet } from "react-native";
import React from "react";
const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  },
});

const Avatar = ({ url, alt }) => {
  console.log(alt);
  return (
    <Image
      style={styles.logo}
      source={{
        uri: url,
      }}
      alt={alt}
    />
  );
};

export default Avatar;
