import { NavigationContainer } from "@react-navigation/native";

type ParamList = {
  Home: {userId: string};
  Details: {itemId: number};
};

type RouteConfig<P, N, S, O, E> = {
  // 配置路由的类型定义
  options?: {
    title?: string;
    // 其他配置选项
  };
};

const Screen = <RouteName extends keyof ParamList>(
  config: RouteConfig<ParamList, RouteName, any, any, any>,
) => null;

// 使用 Screen 函数
Screen({
  // 这里会根据传入的 RouteName 自动推导类型
});

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home"> */}
        {Screen({
          options: {title: 'Home Screen'},
        })}
        {Screen({
          options: {title: 'Details Screen'},
        })}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}