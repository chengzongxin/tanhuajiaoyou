import { FunctionComponent } from "react";
import { Text } from "react-native";

interface LoginProps {
  
}
 
const Login: FunctionComponent<LoginProps> = () => {
  return <Text onPress={()=>{console.log(123);
  }}>Login 123</Text>;
  
}
 
export default Login;