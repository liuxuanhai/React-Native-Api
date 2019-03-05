import React, { Component } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

class ImageComp extends Component {

    // Image.getSize(uri, success, [failure]);
    // 该方法用于获取网络图片的尺寸，而且会缓存图片至本地
    _getSize = () => {
        Image.getSize('http://www.helloui.net/assets/watch.jpg',(width,height)=>{
            console.log(width);
            console.log(height);
        },(error)=>{
            console.log(error);
        });
    };

    // 该方法用于获取本地静态图片的尺寸
    _resolveAssetSource = () => {
        const localImageInfo =  Image.resolveAssetSource(require('../../assets/images/watch.jpg'));
        console.log(localImageInfo);
    }

    // 预加载图片一个远程图片，返回一个Promise对象
    _prefetch = () => {
        Image.prefetch('http://www.helloui.net/assets/watch1.jpg').then((response)=>{
            console.log('预加载成功:',response);
        },(error)=>{
            console.log('预加载失败:',error);
        });
    }

    render(){
        return(
                <View style={styles.viewStyle}>
                    <Image 
                        style={{width:200, height:200}} 
                        // source={require('../../assets/images/watch.jpg')} // 图片源数据（远程 URL 地址或本地数据）
                        source={{uri:'http://www.helloui.net/assets/watch.jpg'}}
                        blurRadius={0} // 为图片添加一个模糊滤镜，值越大图片越模糊，默认值为0
                        onLayout={(e)=>{console.log(e.nativeEvent);}} // 当元素加载完成或者布局改变的时候调用，获取图片的信息坐标和宽高。参数为：{nativeEvent: {layout: {x, y, width, height}}}.
                        onLoadStart={()=>{}} // 开始加载时触发该函数
                        onLoadEnd={()=>{}} // 加载结束后，不论成功还是失败，都触发该函数
                        onLoad={()=>{}} // 加载成功时触发该函数
                        onError={()=>{}} // 加载失败时触发该函数
                        resizeMode='contain' // 决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小，值为枚举类型：enum('cover', 'contain', 'stretch', 'repeat', 'center')
                        defaultSource={require('../../assets/images/watch-loading.jpg')} // 在读取图片时默认显示的图片，只能是本地静态图片。在android上调试模式将不会生效
                    />
                    <Button 
                        title='获取网络图片尺寸并预加载'
                        onPress={this._getSize}
                    />
                    <Button 
                        title='获取本地图片尺寸'
                        onPress={this._resolveAssetSource}
                    />
                    <Button 
                        title='仅预加载'
                        onPress={this._prefetch}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4E4E4'
    }
});

export default ImageComp;