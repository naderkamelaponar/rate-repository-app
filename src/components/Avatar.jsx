/** بسم الله الرحمن الرحيم */
import { Image } from "react-native";
import React from "react";
const Avatar = ({ url, alt ,style}) => {
  
  const xd=[style]
  
  return (
    <Image
      style={xd}
      source={{
        uri: url,
      }}
       
      alt={alt}
    />
  );
};

export default Avatar;
