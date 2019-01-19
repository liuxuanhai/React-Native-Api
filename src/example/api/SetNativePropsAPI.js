import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class SetNativePropsAPI extends React.Component {

    constructor(props){
        super(props);
        this.nativeStyle = {
            style: {
                backgroundColor: 'red'
            }
        }
    }

    _onPress = () => {
        const color = Math.round(Math.random()*1000000);
        this.nativeStyle.style.backgroundColor = this._getRandomColor();
        console.log(this.nativeStyle.style.backgroundColor);
        this._updateNativeStyles();
    }

    _updateNativeStyles = () => {
        this.bgView && this.bgView.setNativeProps(this.nativeStyle);
    }

    _getRandomColor(){
        var rgb='rgb('+Math.floor(Math.random()*255)+',' + Math.floor(Math.random()*255)+',' +Math.floor(Math.random()*255)+')';
        return rgb;
    }

    render(){
        return(
            <View style={styles.containerStyle}>
                <View ref={bgView=>this.bgView=bgView} style={styles.viewStyle}></View>
                <TouchableOpacity style={styles.buttonStyle} onPress={this._onPress}>
                    <Text style={styles.textStyle}>改变背景颜色</Text>
                </TouchableOpacity>
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
    viewStyle: {
        width: 200,
        height: 200,
        backgroundColor:'red'
    },
    buttonStyle: {
        backgroundColor: '#009688',
        marginTop: 30,
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 18
    }
});

export default SetNativePropsAPI;