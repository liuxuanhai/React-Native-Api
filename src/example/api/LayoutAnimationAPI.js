import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, LayoutAnimation, Platform, UIManager, Linking } from 'react-native';

// 布局发生变化时的动画变换效果
class LayoutAnimationAPI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leftViewFlex: 1,
            centerViewFlex: 1,
            rightViewFlex: 1
        };
        //android平台需要开启允许LayoutAnimation ios默认开启
        if (Platform.OS == 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    UNSAFE_componentWillUpdate() {
        // LayoutAnimation.spring(); // easeInEaseOut|linear|spring
        // 等效于
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); // 若需自定义配置参数请参考官网，配好的有三种效果
    }

    _itemViewClick = (name) => {
        switch(name){
            case 'left':
                this.setState({
                    leftViewFlex: 5,
                    centerViewFlex: 1,
                    rightViewFlex: 1
                });
                break;
            case 'center':
                this.setState({
                    leftViewFlex: 1,
                    centerViewFlex: 5,
                    rightViewFlex: 1
                });
                break;
            case 'right':
                this.setState({
                    leftViewFlex: 1,
                    centerViewFlex: 1,
                    rightViewFlex: 5
                });
                break;
        } 
    }

    render(){
        return(
            <View style={styles.containerView}>
                <TouchableOpacity 
                    onPress={()=>this._itemViewClick('left')} 
                    style={[styles.itemView,{backgroundColor:'red', flex:this.state.leftViewFlex}]}
                >
                    <Text>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>this._itemViewClick('center')} 
                    style={[styles.itemView,{backgroundColor:'yellow', flex:this.state.centerViewFlex}]}
                >
                    <Text>Center</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=>this._itemViewClick('right')} 
                    style={[styles.itemView,{backgroundColor:'blue', flex:this.state.rightViewFlex}]}
                >
                    <Text>Right</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        flex: 1
    },
    itemView: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LayoutAnimationAPI;