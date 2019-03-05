import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Easing, TouchableOpacity } from 'react-native';

class AnimatedComp extends Component {

    constructor(props){
        super(props);

        // 使用Animated需要定义一个动画变量，变量类型创建方法有两种：
        // 纯数值类型：new Animated.Value(num); 通常与插值函数interpolate配合使用，用于透明度、缩放、位移、选中动画
        // 坐标类型：new Animated.ValueXY({x:numX, y:numY}); 仅用于位移动画
        this.state = {
            fadeInOpacity: new Animated.Value(0.1), // (1)
            translateXYValue: new Animated.ValueXY({x:0, y:0}), //(2)
            translateValue: new Animated.Value(1), // (3)
            bounceValue : new Animated.Value(1)
        };
    }

    componentDidMount(){
        // this.state.bounceValue.addListener((state) => {   
        //     console.log('bounceValue=>' + state.value);
        // });
        // this.state.bounceValue.stopAnimation((state) => {   
        //     console.log('bounceValue=>' + state.value);
        // });
    }

    _onPress = () => {
        // （1）定义透明度变化的线性动画效果
        // Animated.timing(
        //     this.state.fadeInOpacity, // 动画中的变量值
        //     {
        //       toValue: 1, // 动画中的变量值最终数值设定
        //       easing: Easing.linear, // 动画类型
        //       duration: 1000, // 让动画持续一段时间
        //     }
        //   ).start();

        // （2）定义坐标变化的线性动画效果
        // Animated.timing(
        //     this.state.translateXYValue, // 动画中的变量值
        //     {
        //       toValue: ({x:100, y:0}), // 动画中的变量值最终数值设定
        //       easing: Easing.linear, // 动画类型
        //       duration: 1000, // 让动画持续一段时间
        //     }
        //   ).start();
        
        // （3.1）通过共享同一个纯数值类型的动画变量实现弹性动画效果，这时需要用到插值函数interpolate
        // Animated.spring(
        //     this.state.translateValue, 
        //     {
        //         toValue: 0, // 动画变量从1变为0
        //         velocity: 0, // 初始速度，默认0
        //         // 下面两组配置只能用一种，出来的效果是一样的，只是写法不同
        //         // tension: 7, // 张力系数，默认7
        //         // friction: 4, // 摩擦系数，默认40
        //         // 或
        //         bounciness: 10,      //反弹系数,默认8
        //         speed: 12,           //速度，默认12
        //     }  
        // ).start();
        
        // (3.2) 注意与translateXYValue的区别，两者效果一致，仅写法不同
        // this.state.fadeInOpacity.setValue(0.1);
        // Animated.timing(
        //     this.state.translateValue, // 动画中的变量值
        //     {
        //       toValue: 0, // 动画中的变量值最终数值设定
        //       easing: Easing.linear, // 动画类型
        //       duration: 1000, // 让动画持续一段时间
        //       delay: 3000 // 动画执行延迟时间
        //     }
        //   ).start((finish)=>{console.log(finish);}); // 循环执行，通过setValue方法重设Value值，并结尾加start(() => this._onPress())。返回值为true表示动画执行完成

        // (4) 
        // Animated.decay(
        //     this.state.bounceValue, {
        //         velocity: 0.1, // 起始速度，必填参数。
        //         deceleration: 0.997 // 速度衰减比例，默认为0.997。
        // }).start();

        // 顺序执行sequence|并发执行parallel|stagger在上一个动画开始后隔n秒钟后执行下一个动画|delay延时
        // Animated.parallel(Animates<Array>, [conf<Object>])
        // Animated.sequence(Animates<Array>)
        // Animated.stagger(delayTime<Number>, Animates<Array>)
        Animated.stagger(1000,[
            Animated.delay(1000), // 延时5秒后开始第一个动画
            Animated.timing(
                this.state.fadeInOpacity, // 动画中的变量值
                {
                  toValue: 1, // 动画中的变量值最终数值设定
                  easing: Easing.linear, // 动画类型
                  duration: 2000, // 让动画持续一段时间
                }
            ),
            Animated.timing(
                this.state.translateValue, // 动画中的变量值
                {
                    toValue: 0, // 动画中的变量值最终数值设定
                    easing: Easing.linear, // 动画类型
                    duration: 1000, // 让动画持续一段时间
                }
            ),
            Animated.decay(
                this.state.bounceValue, {
                    velocity: 0.1, // 起始速度，必填参数。
                    deceleration: 0.997 // 速度衰减比例，默认为0.997。
            })
        ]).start();
    }

    render(){
        let { fadeInOpacity } = this.state;

        return(
            <View style={styles.container}>
                <Animated.View   
                    style={
                        [styles.viewStyle, 
                            { 
                                // (1)
                                opacity: fadeInOpacity,
                                // (2)
                                // transform: [
                                //     {translateX: this.state.translateXYValue.x}, // x轴移动
                                //     {translateY: this.state.translateXYValue.y}, // y轴移动
                                // ]
                                // (3.1)
                                // transform: [
                                //     {scale: this.state.translateValue.interpolate({
                                //         inputRange: [0, 1],
                                //         outputRange: [1, 3],
                                //     })},
                                //     {translateX: this.state.translateValue.interpolate({
                                //         inputRange: [0, 1],
                                //         outputRange: [0, 300],
                                //     })},
                                //     {rotate: this.state.translateValue.interpolate({
                                //         inputRange: [0, 1],
                                //         outputRange: [
                                //             '0deg', '720deg'
                                //         ],
                                //     })},
                                // ]
                                // (3.2)
                                transform: [
                                    {
                                        translateX: this.state.translateValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [100, 0]
                                        })
                                    },
                                    {scale: this.state.bounceValue}
                                ]
                                // (4)
                                // transform: [{scale: this.state.bounceValue}]
                            }
                        ]
                    }
                >
                    <Text>Hello RN!</Text>
                </Animated.View>

                <TouchableOpacity style={styles.btnContainerStyle} onPress={this._onPress}>
                    <Text style={{color:'#FFFFFF'}}>触发动画</Text>
                </TouchableOpacity>
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
    viewStyle: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    },
    btnContainerStyle: {
        width: 100,
        height: 30,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'red'
    }
});

export default AnimatedComp;