/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// 可以捕获网络请求
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;

const connectToRemoteDebugger = () => {
  console.log('connectToRemoteDebugger', NativeDevSettings);
  NativeDevSettings.setIsDebuggingRemotely(true);
  setShow(false);
};

AppRegistry.registerComponent(appName, () => App);
