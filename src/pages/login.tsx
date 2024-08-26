import React, { FunctionComponent } from "react";
import { Image, StatusBar, Text, View } from "react-native";

interface LoginProps {
  
}
 
const Login: FunctionComponent<LoginProps> = () => {
  return (
    <View>
      <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
      <Image
        style={{width: '100%', height: 'auto', aspectRatio:1.5}}
        source={require('../res/profileBackground.jpg')}
      />
    </View>
  );
}

export default Login;