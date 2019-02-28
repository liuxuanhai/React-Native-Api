import React, { Component } from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    TouchableOpacity 
} from 'react-native';

class TouchableComp extends Component {

    _onPress = () => {
        console.log('onPress');
    }

    _onPressOut = () => {
        console.log('onPressOut');
    }

    _onPressIn = () => {
        console.log('onPressIn');
    }

    _onLongPress = () => {
        console.log('onLongPress');
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.buttonStyle}
                    onPress={this._onPress}
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                    onLongPress={this._onLongPress}
                    activeOpacity={0.85}
                    delayLongPress={3800}
                    underlayColor='green'
                >
                    <Text style={styles.textStyle}>TouchableHighlight</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this._onPress}
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                    onLongPress={this._onLongPress}
                    delayLongPress={3800}
                    activeOpacity={0.2}
                >
                    <Text style={styles.textStyle}>TouchableOpacity</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle:{
        justifyContent: 'center',
        borderColor: '#000000',
        backgroundColor: '#DDDDDD',
        borderWidth: 1,
        borderRadius: 10,
        margin: 20,
        height: 50
    },
    textStyle:{
        fontSize: 16,
        color: '#000000',
        alignSelf: 'center'
    }
});

export default TouchableComp;