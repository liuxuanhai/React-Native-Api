import React from 'react';
import { View, Text, Image, StyleSheet, ImageEditor } from 'react-native';

const cropData = {
    offset: {x: 184, y: 0},//从原图裁剪的起始坐标
    size: {width: 184, height: 184},//裁剪的宽高
    displaySize: {width: 184, height: 184},//裁剪后生成图片的大小
    resizeMode: 'contain', //缩放图像时使用的调整大小模式
    //cover模式只求在显示比例不失真的情况下填充整个显示区域。可以对图片进行放大或者缩小，超出显示区域的部分不显示， 也就是说，图片可能部分会显示不了。
    //contain模式是要求显示整张图片, 可以对它进行等比缩小, 图片会显示完整,可能会露出Image控件的底色。
    //stretch模式不考虑保持图片原来的宽,高比.填充整个Image定义的显示区域,这种模式显示的图片可能会畸形和失真。
};

class ImageEditorAPI extends React.Component {

    state = {
        imgURI: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539924436942&di=8c3816f222fe7edce298039f1146f323&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160920%2F1076107966026029_b.jpg',
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
        alignItems: 'center'
    },
    imgStyle: {
        width: 200,
        height: 200
    }
});

export default ImageEditorAPI;