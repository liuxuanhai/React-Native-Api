import React from 'react';
import { View, Text, InteractionManager, Animated, StyleSheet, Easing } from 'react-native';

class InteractionManagerAPI extends React.Component{

    state = {
        translateXYValue: new Animated.ValueXY({x:0, y:0}), //(2)
    };

    componentDidMount(){
        console.log(1);
        InteractionManager.runAfterInteractions(() => {
            console.log('i need long time'); // 会在动画执行结束后才执行该语句
        });
        console.log(2);
        Animated.timing(
            this.state.translateXYValue, // 动画中的变量值
            {
              toValue: ({x:200, y:0}), // 动画中的变量值最终数值设定
              easing: Easing.linear, // 动画类型
              duration: 3000, // 让动画持续一段时间
            }
        ).start();
    }

    render(){
        return(
            <View style={styles.container}>
                <Animated.View   
                    style={
                        [styles.viewStyle, 
                            { 
                                transform: [
                                    {translateX: this.state.translateXYValue.x}, // x轴移动
                                    {translateY: this.state.translateXYValue.y}, // y轴移动
                                ]
                            }
                        ]
                    }
                >
                    <Text>InteractionManager</Text>
                </Animated.View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewStyle: {
        width: 150,
        height: 100,
        borderWidth: 1
    }
});

export default InteractionManagerAPI;