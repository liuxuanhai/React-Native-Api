import React from 'react';
import { View, Button } from 'react-native';

class TimerAPI extends React.Component {

    _onTimeoutPress = () => {
        this.timeout = setTimeout(() => {
            console.log('setTimeout!!!');
        }, 3000);
    }

    _onIntervalPress = () => {
        this.interval = setInterval(() => {
            console.log('setInterval!!!');
        }, 3000);
    }

    _onImmediatePress = () => {
        // 则会在当前 JavaScript 执行块结束的时候执行，就在将要发送批量响应数据到原生之前。
        // eslint-disable-next-line no-undef
        this.immediate = setImmediate(()=> {
            console.log('setImmediatel!!!');
        });
    }

    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
        this.interval && clearInterval(this.interval);
        // eslint-disable-next-line no-undef
        this.immediate && clearImmediate(this.immediate);
    }
    
    render(){
        return(
            <View>
                <Button onPress={this._onTimeoutPress} title='setTimeout' />
                <Button onPress={this._onIntervalPress} title='setInterval' />
                <Button onPress={this._onImmediatePress} title='setImmediate' />
            </View>
        );
    }
}

export default TimerAPI;