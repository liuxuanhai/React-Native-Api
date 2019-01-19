import React from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

class PanResponderAPI extends React.Component {

    UNSAFE_componentWillMount() {
        this._previousLeft = 0;
        this._previousTop = 0;
        this._circleStyles = {
          style: {
            left: this._previousLeft,
            top: this._previousTop
          },
        };
    }

    constructor(props){
        super(props);
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,  // 返回ture时，表示该组件愿意成为触摸事件的响应者，如实现触摸点击，默认返回false。
            onMoveShouldSetPanResponder: () => true, // 返回ture时，表示该组件愿意成为触摸(滑屏)事件的响应者，如实现触摸滑屏，默认返回false。
            onStartShouldSetPanResponderCapture: () => true, // 与onStartShouldSetPanResponder相同，如父组件A里包含了子组件B，当A、B都想成为触摸事件响应者时，若此时设为true，则父组件A优先级更高
            onMoveShouldSetPanResponderCapture: () => true, // 与onMoveShouldSetPanResponder相同，如父组件A里包含了子组件B，当A、B都想成为触摸事件响应者时，若此时设为true，则父组件A优先级更高
            onPanResponderGrant: () => {},    // 手势刚开始触摸(即刚接触屏幕时)时，若响应成功则触发该事件
            onResponderReject: () => {}, // 手势刚开始触摸(即刚接触屏幕时)时，若响应失败则触发该事件，失败原因有可能是其它组件正在响应手势且不肯放权
            onPanResponderMove: (evt, gestureState) => {
                this._circleStyles.style.left = this._previousLeft + gestureState.dx;
                this._circleStyles.style.top = this._previousTop + gestureState.dy;
                this._updateNativeStyles();
            },    // 手势滑动时触发该事件
            onPanResponderRelease: (evt,gestureState) => {
                // 写法 一
                // this._previousLeft = evt.nativeEvent.pageX-evt.nativeEvent.locationX;
                // this._previousTop = evt.nativeEvent.pageY-evt.nativeEvent.locationY;
                // 写法 二
                this._previousLeft += gestureState.dx;
                this._previousTop += gestureState.dy;
            },    // 手势松开时触发该事件
            onPanResponderTerminationRequest: () => true, // 当其它组件需要响应手势时，此时为ture则表示本组件愿意放权给其它组件响应；为false时表示不放权，依然由本组件来响应手势事件
            onPanResponderTerminate: () => {} // 当组件响应放权后(即由其它组件拿到了手势响应权)触发该事件
        });
    }

    _updateNativeStyles() {
        this.circle && this.circle.setNativeProps(this._circleStyles);
    }

    render(){
        return(
            <View
                ref={circle  => {
                    this.circle  = circle ;
                }} 
                style={[styles.container]}
                {...this._panResponder.panHandlers}
            ></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: 'yellow'
    }
});

export default PanResponderAPI;

// 回调参数1： evt字段下的nativeEvent属性(evt.nativeEvent)
// changedTouches - 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸点）
// identifier - 触摸点的 ID
// locationX - 触摸点相对于父元素的横坐标
// locationY - 触摸点相对于父元素的纵坐标
// pageX - 触摸点相对于根元素的横坐标
// pageY - 触摸点相对于根元素的纵坐标
// target - 触摸点所在的元素 ID
// timestamp - 触摸事件的时间戳，可用于移动速度的计算
// touches - 当前屏幕上的所有触摸点的集合

// 回调参数2：gestureState字段：
// stateID - 触摸状态的 ID。在屏幕上有至少一个触摸点的情况下，这个 ID 会一直有效。
// moveX - 最近一次移动时的屏幕横坐标
// moveY - 最近一次移动时的屏幕纵坐标
// x0 - 当响应器产生时的屏幕坐标
// y0 - 当响应器产生时的屏幕坐标
// dx - 从触摸操作开始时的累计横向路程
// dy - 从触摸操作开始时的累计纵向路程
// vx - 当前的横向移动速度
// vy - 当前的纵向移动速度
// numberActiveTouches - 当前在屏幕上的有效触摸点的数量