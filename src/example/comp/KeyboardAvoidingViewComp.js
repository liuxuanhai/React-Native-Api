import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';

class KeyboardAvoidingViewComp extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
    }

    onChangeTextHandle = (value) => {
        this.setState({text: value});
    }

    render(){
        // KeyboardAvoidingView android环境意义不大，ios下没测过。目的：防止弹出的键盘遮挡到输入框
        return(
            <KeyboardAvoidingView
                style={styles.containerStyle}
                behavior="padding" 
                enabled
            >
                <View style={styles.headViewStyle}>
                    <Text>Head</Text>
                </View>
                <View style={styles.contentViewStyle}>
                    <Text>Content</Text>
                </View>
                <View>
                    <TextInput 
                        style={styles.TextInputStyle} 
                        value={this.state.text} 
                        placeholder="code some message..."
                        placeholderTextColor='#A4A4A4'
                        onChangeText={this.onChangeTextHandle}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    headViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    contentViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    TextInputStyle: {
        padding: 0,
        height: 50, 
        borderColor: 'green', 
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        color: '#000000',
        paddingLeft: 10
    }
});

export default KeyboardAvoidingViewComp;
