import React from 'react';
import { View, NetInfo, Button } from 'react-native';

// 使用NetInfo需配置权限：
// <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
class NetInfoAPI extends React.Component {

    // 检测网络状态
    checkNet = () => {
        NetInfo.isConnected.fetch().then(isConnected => {
            console.log('网络状态：' + isConnected ? 'online' : 'offline');
        });

        // 事件监听
        function handleFirstConnectivityChange(isConnected) {
            console.log('状态变化了，网络状态：' + isConnected ? 'online' : 'offline');
            NetInfo.isConnected.removeEventListener('connectionChange',handleFirstConnectivityChange);
        }
        NetInfo.isConnected.addEventListener('connectionChange',handleFirstConnectivityChange);
    }

    // 获取网络信息 
    // 回调参数 type:
    // none - 设备处于离线状态
    // wifi - 设备通过wifi联网，或者设备是iOS模拟器
    // cellular - 设备通过蜂窝数据流量联网
    // unknown - 联网状态异常
    // 回调参数 effectiveType:
    // 2g
    // 3g
    // 4g
    // unknown
    getNetInfo = () => {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log('连接方式: ' + connectionInfo.type + ', 网络牌照: ' + connectionInfo.effectiveType);
        });

        // 事件监听
        function handleFirstConnectivityChange(connectionInfo) {
            console.log('信息变化了, 连接方式: ' + connectionInfo.type + ', 网络牌照: ' + connectionInfo.effectiveType);
            NetInfo.removeEventListener('connectionChange',handleFirstConnectivityChange);
        }
        NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
    }

    render(){
        return(
            <View>
                <Button 
                    onPress={this.checkNet}
                    title='检测网络状态'
                />
                <Button 
                    onPress={this.getNetInfo}
                    title='获取网络信息'
                />
            </View>
        );
    }
}

export default NetInfoAPI;