import React from 'react';
import { View, Text, Image, StyleSheet, ImageEditor } from 'react-native';

const cropData = {
    offset: {x: 10, y: 30},//从原图裁剪的起始坐标
    size: {width: 250, height: 250},//裁剪的宽高
    displaySize: {width: 250, height: 250},//裁剪后生成图片的大小
    resizeMode: 'contain', //缩放图像时使用的调整大小模式
    //cover模式只求在显示比例不失真的情况下填充整个显示区域。可以对图片进行放大或者缩小，超出显示区域的部分不显示， 也就是说，图片可能部分会显示不了。
    //contain模式是要求显示整张图片, 可以对它进行等比缩小, 图片会显示完整,可能会露出Image控件的底色。
    //stretch模式不考虑保持图片原来的宽,高比.填充整个Image定义的显示区域,这种模式显示的图片可能会畸形和失真。
};

// 只能用于远程图片
class ImageEditorAPI extends React.Component {

    state = {
        imgURI: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551718648408&di=e5c78eb153cac2a1ec7a077f0df5190c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F279759ee3d6d55fb567c04ef67224f4a21a4dd45.jpg',
        cropImgURI: null
    }

    componentDidMount(){
        ImageEditor.cropImage(this.state.imgURI, cropData, this.cropSuccess, this.cropFail);
    }

    cropSuccess = (corpImgURI) => {
        console.log('图片剪辑成功');
        this.setState({cropImgURI:corpImgURI});
    }

    cropFail = () => {
        console.log('图片剪辑失败');
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <Text>剪辑前：</Text>
                <Image 
                    source={{ uri: this.state.imgURI }} 
                    style={styles.imgStyle} 
                />
                <Text>剪辑后：</Text>
                <Image 
                    source={{ uri: this.state.cropImgURI }} 
                    style={styles.imgStyle}
                    resizeMode="contain" 
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
    },
    imgStyle: {
        width: 200,
        height: 200
    }
});

export default ImageEditorAPI;