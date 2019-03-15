import React from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

class SwitchComp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value: false
        };
    }

    _onValueChange = (value) => {
        this.setState({value});
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.switchViewStyle}>
                    <Text>是否打开WIFI：</Text>
                    <Switch
                        style={styles.switchStyle}
                        disabled={false} // 如果为true则禁用此组件的交互
                        value={this.state.value} // 表示此开关是否打开。默认为false（关闭状态）
                        onValueChange={this._onValueChange} // 当值改变的时候调用此回调函数，参数为新的值
                        trackColor={{'false':'gray','true':'green'}} // 开启和关闭状态时的背景颜色
                        thumbColor="white" // 开关上圆形按钮的背景颜色。在iOS上设置此颜色会丢失按钮的投影。
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchViewStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchStyle: {
        marginLeft: 20,
        transform: [{scale: 2}]
    }
});

export default SwitchComp;