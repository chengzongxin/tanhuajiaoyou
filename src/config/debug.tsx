import {useState, useEffect} from 'react';
import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';
import {Text} from 'react-native';
import React from 'react';

function DebugButton() {
  const [show, setShow] = useState(true);

  const connectToRemoteDebugger = () => {
    if (__DEV__) {
      // 仅在开发模式下执行
      console.log('connectToRemoteDebugger', NativeDevSettings);
      NativeDevSettings.setIsDebuggingRemotely(true);
      setShow(false);

      // 可以捕获网络请求, 放在index.js里
      // global.XMLHttpRequest =
      //   global.originalXMLHttpRequest || global.XMLHttpRequest;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    // 清除定时器，避免内存泄漏
    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <Text
        onPress={connectToRemoteDebugger}
        style={{
          fontSize: 50,
          backgroundColor: 'aqua',
          margin: 20,
          textAlign: 'center',
        }}>
        开启调试
      </Text>
    )
  );
}

export default DebugButton;
