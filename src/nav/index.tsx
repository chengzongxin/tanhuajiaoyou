import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import Login from '../pages/login'
import {ScreenContainer} from 'react-native-screens';
import {useState} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Login: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details page"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}: HomeScreenProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.goBack()}>
        Details Screen Click Goback!
      </Text>
    </View>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function nav() {
  const [showHomeHeader, setShowHomeHeader] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={props => {
            console.log('props from Home', props);
            let so = {headerShown: showHomeHeader};
            return so;
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={props => {
            // if (count % 5 == 0) {
            setShowHomeHeader(false);
            // }
            // setCount(count + 1);
            console.log('props from Details', props);
            let so = {};
            return so;
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default nav;
