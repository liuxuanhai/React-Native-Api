import React from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class ImagePickerAPI extends React.Component {

    state = {
        avatarSource: {
            uri: ''
        }
    }

    onPressImg = () => {
        const options = {
            title: '选择图片', 
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照', 
            chooseFromLibraryButtonTitle: '相册', 
            customButtons: [
                {name: '唯一名称', title: '显示的自定义按钮内容'},
              ],
            cameraType: 'back', // 类型 'front' or 'back' ,前置还是后置摄像头
            mediaType: 'photo', // 图片或视频 'photo', 'video', or 'mixed' on iOS, 'photo' or 'video' on Android
            videoQuality: 'high',  // 视频质量 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
            durationLimit: 10,  // 最大录制时间
            maxWidth: 300, // 返回的图片数据的最大宽 photos only 只有图片有这个属性
            maxHeight: 300, // 返回的图片数据的最大高 photos only
            quality: 0.8, // 图片质量 0 to 1 photos only
            angle: 90,
            allowsEditing: false, // 是否可以编辑
            noData: false, // 如果为true，则禁用data生成的base64 字段（极大地提高大图片的性能）
            storageOptions: {
                skipBackup: true   // 如果true，该照片将不会备份到iCloud
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('取消');
            }
            else if (response.error) {
                console.log('发生错误: ', response.error);
            }
            else if (response.customButton) {
                console.log('自定义按钮被点击，它的名称是：', response.customButton);
            }
            else {
                console.log('Response = ', response); // 选择或拍摄的照片数据对象
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    onPressVideo = () => {
        const options = {
            title: '选择视频',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '录制视频',
            chooseFromLibraryButtonTitle: '选择视频',
            mediaType: 'video',
            videoQuality: 'medium' // 视频质量 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('取消');
            }
            else if (response.error) {
                console.log('发生错误: ', response.error);
            }
            else if (response.customButton) {
                console.log('自定义按钮被点击，它的名称是：', response.customButton);
            }
            else {
                console.log('Response = ', response); // 选择或录取的视频数据对象
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }

    _renderImg = () => {
        const side = 200 ;
        if(this.state.avatarSource.uri){
            return(
                <View>
                    <Image 
                        source={{ uri: this.state.avatarSource.uri }} 
                        style={{width:side, height:side}} 
                    />
                </View>
            );
        }else{
            return null;
        }
    }

    render(){
        return(
            <View>
                <Button 
                    title='照片'
                    onPress={this.onPressImg}
                />

                <Button 
                    title='视频'
                    onPress={this.onPressVideo}
                />

                {this._renderImg()}
            </View>
        );
    }
}

export default ImagePickerAPI;