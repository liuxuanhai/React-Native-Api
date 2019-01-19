import React from 'react';
import { View, Animated, PanResponder, StyleSheet } from 'react-native';

class GestureAnimationComp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            trans: new Animated.ValueXY(),
        };
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true, //响应手势
            onPanResponderMove: Animated.event(
                [null, {dx: this.state.trans.x, dy:this.state.trans.y}] // 从gestureState中解析出dx和dy的值，绑定到trans动画变量
            ),
            onPanResponderRelease: ()=>{//手松开，回到原始位置
                Animated.spring(
                    this.state.trans,
                    {
                        toValue: {x: 0, y: 0}
                    }
                ).start();
            },
            onPanResponderTerminate:()=>{//手势中断，回到原始位置
                Animated.spring(
                    this.state.trans,
                    {
                        toValue: {x: 0, y: 0}
                    }
                ).start();
            },
        });
        console.log(this._panResponder.panHandlers);
    }


    render(){
        return(
<           View style={styles.container}>
                <Animated.View 
                    style={{
                        width:80,
                        height:80,
                        borderRadius:40,
                        backgroundColor:'blue',
                        transform:[
                            {translateY:this.state.trans.y},
                            {translateX:this.state.trans.x},
                        ],
                    }}
                    {...this._panResponder.panHandlers} // 添加手势监听事件
                >
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:25,
        flex: 1,
    },
});

export default GestureAnimationComp;