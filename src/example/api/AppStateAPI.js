import React from 'react';
import { View, Text, AppState } from 'react-native';

class AppStateAPI extends React.Component {

    state = {
        appState: AppState.currentState
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }
    
    _handleAppStateChange = (nextAppState) => {
        if (nextAppState === 'active') {
            console.log('状态已经回到应用');
        }else{
            console.log('状态不在应用中');
        }
        this.setState({appState: nextAppState});
    }

    render(){
        console.log(this.state.appState);
        return(
            <View>
                <Text>Current state is: {this.state.appState}</Text>
            </View>
        );
    }
}

export default AppStateAPI;

// active - 应用正在前台运行
// background - 应用正在后台运行。用户可能面对以下几种情况：
// -在别的应用中
// -停留在桌面
// -对 Android 来说还可能处在另一个Activity中（即便是由你的应用拉起的）
// inactive - 此状态表示应用正在前后台的切换过程中，或是处在系统的多任务视图，又或是处在来电状态中。