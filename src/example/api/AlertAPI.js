import React from 'react';
import { View, Button, Alert } from 'react-native';

// 提示对话框（系统默认样式），也可以通过Modal组件自定义构建界面实现同样效果
class AlertAPI extends React.Component {
    _openAlert = () => {
        Alert.alert(
            '提示',
            '是否允许App上传错误数据？',
            [
              {text: '稍后询问我', onPress: () => console.log('Ask me later pressed')},
              {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: '允许', onPress: () => console.log('OK Pressed')},
            ],  // 当数组有为两个对象时，为取消和允许；当数组仅有一个对象时，为允许。
            { cancelable: false }
        );
    }

    render(){
        return(
            <View>
                <Button 
                    onPress={()=>{
                        this._openAlert();
                    }}
                    title="打开Alert弹窗"
                />
            </View>
        );
    }
}

export default AlertAPI;