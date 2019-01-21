import React from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

class SliderComp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            slidervalue: 50
        };
    }

    _onChange = (value) => {
        this.setState({slidervalue:value});
    }

    _onSlidingComplete = (value) => {
        console.log('用户松开滑块了，当前值为'+value);
    }

    render(){
        return(
            <View style={styles.container}>
                <Slider 
                    style={styles.SliderStyle} // 样式，需要至少设置一个宽度
                    disabled={false} // 如果为true，用户就不能移动滑块。默认为false
                    minimumValue={0} // 滑块的最小值（当滑块滑到最左端时表示的值）。默认为0。
                    maximumValue={100} // 滑块的最大值（当滑块滑到最右端时表示的值）。默认为1。
                    thumbTintColor='red' // 滑块的颜色(仅android有效)，ios使用thumbImage传入一张静态图
                    minimumTrackTintColor="red" // 滑块左侧轨道的颜色。在iOS上默认为一个蓝色的渐变色。
                    maximumTrackTintColor="gray" // 滑块右侧轨道的颜色。在iOS上默认为一个灰色的渐变色。
                    value={this.state.slidervalue} // 滑块的值
                    onValueChange={this._onChange} // 在用户拖动滑块的过程中不断调用此回调
                    onSlidingComplete={this._onSlidingComplete} // 用户松开滑块的时候调用此回调，无论值是否变化。回调值为当前值
                    step={1} // 滑块的步长，值应该在0到(maximumValue - minimumValue)之间，默认值为0
                />
                <Text>当前选择的value：{this.state.slidervalue}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SliderStyle: {
        width: 300
    }
});

export default SliderComp;