import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class FrameAnimationComp extends Component {

    constructor(props){
        super(props);
        this.state = {
            width: 100,
            height: 100
        };
        this.view = React.createRef();
    }

    _onPress = () => {
        let count = 0;
        let width = this.state.width;
        let height = this.state.height;
        let i = 0;
        while(++count<=100){
            requestAnimationFrame(()=>{
                i++;
                width++;
                height++;
                this.view.current.setNativeProps({
                    style: {
                        width,
                        height
                    }
                });
                // 100帧动画完成，将变化后的宽高值存储至状态中
                if(i === 100){
                    this.setState({width,height});
                }
            });
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View  ref={this.view} style={[styles.viewStyle,{width: this.state.width, height: this.state.height}]}>
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

export default FrameAnimationComp;