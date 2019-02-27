import React from 'react';
import { View, Text, AccessibilityInfo } from 'react-native';

// 检测用户的设备是否正在运行读屏应用
class ScreenReaderAPI extends React.Component {
    
    state = {
        screenReaderEnabled: false
    };

    componentDidMount() {
        // 读屏应用状态改变时触发。传递给监听函数的参数为布尔值，true表示开启状态，false反之
        AccessibilityInfo.addEventListener(
          'change',
          this._handleScreenReaderToggled
        );
        // 查询读屏应用当前是否开启。返回值为一个 promise，最终解析值为一个布尔值。true表示开启状态，false反之
        AccessibilityInfo.fetch().then(isEnabled => {
          this.setState({
            screenReaderEnabled: isEnabled
          });
        });
    }
    
    componentWillUnmount() {
        AccessibilityInfo.removeEventListener(
          'change',
          this._handleScreenReaderToggled
        );
    }
    
    _handleScreenReaderToggled = isEnabled => {
        this.setState({
          screenReaderEnabled: isEnabled
        });
    };

    render(){
        return (
            <View>
                <Text>
                    The screen reader is{' '}
                    {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
                </Text>
            </View>
        );
    }
}

export default ScreenReaderAPI;