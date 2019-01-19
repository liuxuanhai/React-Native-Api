import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation,Platform, UIManager  } from 'react-native';

// LayoutAnimation 动画仅支持的动画效果：透明度、缩放
class LayoutAnimationComp extends Component {

    constructor(props){
        super(props);
        this.state = {
            width: 100,
            height: 100
        };
        if (Platform.OS == 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    UNSAFE_componentWillUpdate () {
        // LayoutAnimation 属性：
        // 1.Types：动画类型(枚举类型)，主要有三种：spring弹性|linear线性|easeInEaseOut缓出缓入
        // 2.Properties：动画特性(枚举类型)，描述动画效果，主要有两种：opacity透明度|scaleXY缩放
        // 3.Presets：一组预定义好的动画配置。(可把LayoutAnimation.Presets打印出来和configureNext方法配置项比较)
        // LayoutAnimation 方法：
        // 1.spring() 使用预定义的动画配置(可查看Presets属性值)在相应条件下触发弹性动画效果
        // 2.linear() 使用预定义的动画配置(可查看Presets属性值)在相应条件下触发线性动画效果
        // 3.easeInEaseOut() 使用预定义的动画配置(可查看Presets属性值)在相应条件下触发缓出缓入动画效果         
        // 4.configureNext(config, onAnimationDidEnd?) // 自定义动画配置，onAnimationDidEnd动画完成回调函数，目前仅ios环境下有效
        LayoutAnimation.configureNext({
            duration: 1000, // 预设的动画持续时间
            // 组件创建时的动画
            // create: { 
                // duration: 1000, // 动画持续时间，没有设置时使用配置的默认值
                // delay: 0, // 动画延时执行时间
                // springDamping: 0.4, // 弹跳动画阻尼系数，配合动画类型为spring使用
                // type: LayoutAnimation.Types.linear, // 动画类型: spring弹性|linear线性|easeInEaseOut缓出缓入|easeIn缓入|easeOut缓出
                // property: LayoutAnimation.Properties.scaleXY // 动画特性: opacity透明度|scaleXY缩放
            // },
            // 组件更新时的动画
            update: { 
                duration: 1000,
                delay: 0,
                springDamping: 0.4,
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY
            },
            // 组件删除时的动画
            // delete:{}
          });
    }

    _onPress = () => {
        this.setState({width: this.state.width + 50, height: this.state.height + 50});
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.viewStyle, {width: this.state.width, height: this.state.height}]}>
                    <Text>Hello RN!</Text>
                </View>

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

export default LayoutAnimationComp;