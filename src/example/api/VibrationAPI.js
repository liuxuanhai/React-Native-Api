import React from 'react';
import { View, Button, Vibration } from 'react-native';

// 手机振动，权限控制<uses-permission android:name="android.permission.VIBRATE"/>
const DURATION = 10000;
const PATTERN = [1000, 2000, 3000];
class VibrationAPI extends React.Component{

    _vibration1 = () => {
        Vibration.vibrate(DURATION);
        // Android: vibrate for 10s
        // iOS: duration is not configurable, vibrate for fixed time (about 500ms)
    }

    _vibration2 = () => {
        Vibration.vibrate(PATTERN);
        // Android: wait 1s -> vibrate 2s -> wait 3s
        // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate
    }

    _vibration3 = () => {
        Vibration.vibrate(PATTERN, true);
        // Android: wait 1s -> vibrate 2s -> wait 3s -> wait 1s -> vibrate 2s -> wait 3s -> ...
        // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> ...
    }

    _vibrationCancel = () => {
        Vibration.cancel();
        // Android: vibration stopped
        // iOS: vibration stopped
    }

    render(){
        return(
            <View>
                <Button 
                    onPress={this._vibration1}
                    title='振动方式1'
                />
                <Button 
                    onPress={this._vibration2}
                    title='振动方式2'
                />
                <Button 
                    onPress={this._vibration3}
                    title='振动方式3'
                />
                <Button 
                    onPress={this._vibrationCancel}
                    title='停止振动'
                />
            </View>
        );
    }
}

export default VibrationAPI;