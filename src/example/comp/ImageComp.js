import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

// 如果有my-icon.ios.png和my-icon.android.png，Packager就会根据平台而选择不同的文件
// 还可以使用@2x，@3x这样的文件名后缀，来为不同的屏幕精度提供图片
// 要注意图片属性API

class ImageComp extends Component {

    render(){
        return(
            <ImageBackground source={require('../../assets/images/watch.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.viewStyle}>
                    <Text>本地静态图片：</Text>
                    <Image style={styles.imgStyle} source={require('../../assets/images/watch.jpg')} />
                    <Text>网络和Base64图片：</Text>
                    <Image style={styles.imgStyle} source={{uri:'http://www.helloui.net/assets/watch.jpg'}} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        width: 200,
        height: 200
    }
});

export default ImageComp;