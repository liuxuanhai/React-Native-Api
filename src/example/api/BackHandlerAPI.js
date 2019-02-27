import React from 'react';
import { View, Text, BackHandler } from 'react-native';

class BackHandlerAPI extends React.Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    handleBackPress = () => {
        console.log('设备返回键被点击');
        // BackHandler.exitApp(); // 退出APP
        return true; // 默认返回false。当为true时表示不触发返回设备界面的操作
    }

    render(){
        return(
            <View>
                <Text>BackHandlerAPI</Text>
            </View>
        );
    }
}

export default BackHandlerAPI;