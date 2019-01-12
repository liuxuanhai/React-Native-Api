import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

class TouchableComp extends Component {

    _onPressHeighlight = () => {
        console.log('TouchableHighlight-onPress');
    }

    _onPressOutHeighlight = () => {
        console.log('TouchableHighlight-onPressOut');
    }

    _onPressInHeighlight = () => {
        console.log('TouchableHighlight-onPressIn');
    }

    _onLongPressHeighlight = () => {
        console.log('TouchableHighlight-onLongPress');
    }

    _onPressOpacity = () => {
        console.log('TouchableOpacity-onPress');
    }

    _onPressOutOpacity = () => {
        console.log('TouchableOpacity-onPressOut');
    }

    _onPressInOpacity = () => {
        console.log('TouchableOpacity-onPressIn');
    }

    _onLongPressOpacity = () => {
        console.log('TouchableOpacity-onLongPress');
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.buttonStyle}
                    onPress={this._onPressHeighlight}
                    onPressIn={this._onPressInHeighlight}
                    onPressOut={this._onPressOutHeighlight}
                    delayLongPress={3800}
                    onLongPress={this._onLongPressHeighlight}
                    activeOpacity={0.85} // 指定封装的视图在被触摸操作激活时以多少不透明度显示（0到1之间）,默认值为0.85
                    underlayColor='red' // 有触摸操作时显示出来的底层的颜色
                >
                    <Text style={styles.textStyle}>TouchableHighlight</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this._onPressOpacity}
                    onPressIn={this._onPressInOpacity}
                    onPressOut={this._onPressOutOpacity}
                    delayLongPress={3800}
                    onLongPress={this._onLongPressOpacity}
                    activeOpacity={0.2} // 指定封装的视图在被触摸操作激活时以多少不透明度显示（0到1之间）,默认值为0.2
                >
                    <Text style={styles.textStyle}>TouchableOpacity</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#007AFF',
        backgroundColor: '#DDDDDD',
        padding: 8,
        margin: 10
    },
    textStyle:{
        fontSize: 16,
        color: '#007AFF',
        marginLeft: 16,
        marginRight: 16,
        alignSelf: 'center'
    }
});

export default TouchableComp;