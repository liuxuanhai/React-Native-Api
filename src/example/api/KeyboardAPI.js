import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

class KeyboardAPI extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }
    
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow () {
        console.log('Keyboard Shown');
    }

    _keyboardDidHide () {
        console.log('Keyboard Hidden');
    }

    onChangeTextHandle = (value) => {
        this.setState({text: value});
    }

    onSubmitEditingHandle = () => {
        console.log('完成输入');
    }

    onBlurHandle = () => {
        console.log('失去焦点');
        Keyboard.dismiss();
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={this.onBlurHandle}
            >
                <View style={styles.viewStyle}>
                    <TextInput
                        style={styles.TextInputStyle} 
                        value={this.state.text} 
                        placeholder="code some message..."
                        placeholderTextColor='#A4A4A4'
                        onChangeText={this.onChangeTextHandle}
                        onBlur={this.onBlurHandle}
                        onSubmitEditing={this.onSubmitEditingHandle}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    TextInputStyle: {
        padding: 0,
        height: 50, 
        borderColor: 'green', 
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        color: '#000000',
        paddingLeft: 10
    },
    viewStyle: {
        flex: 1
    }
});

export default KeyboardAPI;