import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class TextInputComp extends Component {

    state = { 
        text: ''
    };

    onChangeTextHandle = (value) => {
        this.setState({text: value});
    }

    onBlurHandle = () => {
        console.log('失去焦点');
    }

    onFocusHandle = () => {
        console.log('得到焦点');
    }

    onSubmitEditingHandle = () => {
        console.log('提交内容');
    }

    render() {
        return (
            <TextInput
                style={styles.TextInputStyle} 
                value={this.state.text} 
                placeholder="请输入您需要的商品"
                placeholderTextColor='#A4A4A4'
                editable={true} // 是否可编辑，默认为: true
                secureTextEntry={false} // 是否为密码，默认为: false
                keyboardType='default' // 弹出键盘类型，默认为: default。数字键盘numeric，邮箱键盘email-address，电话键盘phone-pad
                maxLength={10} // 限制文本框中最多的字符数
                multiline={false} // 是否为多行文本，默认为: false
                onChangeText={this.onChangeTextHandle} // 当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递
                onBlur={this.onBlurHandle} // 失去焦点事件
                onFocus={this.onFocusHandle} // 得到焦点事件
                onSubmitEditing={this.onSubmitEditingHandle} // 提交编辑内容事件
                />
        );
    }
}

const styles = StyleSheet.create({
    TextInputStyle: {
        margin: 10,
        padding: 0,
        height: 50, 
        borderColor: 'green', 
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        color: '#000000',
        paddingLeft: 10,
        backgroundColor: '#FFFFFF'
    }
});

export default TextInputComp;