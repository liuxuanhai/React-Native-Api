import React from 'react';
import { View, Text, Button, Image, Platform, CameraRoll, PermissionsAndroid, Alert } from 'react-native';

class CameraRollAPI extends React.Component {

    state = {
        images: [], // 存放照片数据
        cursorEnd: '', // 上一次相册中获取照片的结束标记
        hasNextPage: true // 是否还有下一张照片
    }

    UNSAFE_componentWillMount() {
        this.requestReadPermission();
    }

    getPhotos(){
        if(this.state.hasNextPage){
            let queryNativePictuire = {
                first: 1, 
                assetType: 'Photos' // All全部|Videos录像|Photos照片（默认）
            };
            if (this.state.cursorEnd) {
                queryNativePictuire.after = this.state.cursorEnd;
            }
            CameraRoll.getPhotos(queryNativePictuire).then((result) => {
                let pageInfo = result.page_info;
                this.setState({ images: result.edges, cursorEnd: pageInfo.end_cursor, hasNextPage: pageInfo.has_next_page });
            }).catch((error) => {
                console.log(error);
            });
        }else{
            Alert.alert('提示','已经没有下一张照片');
        }
    }

    async requestReadPermission() {
        try {
            const os = Platform.OS; // android or ios
            if(os === 'android'){
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        //第一次请求【拒绝】后提示用户你为什么要这个权限
                        'title': '我要读写权限',
                        'message': '没权限我不能工作，同意就好了'
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    // 已获取了读写权限
                    this.getPhotos();
                } else {
                    // 获取读写权限失败
                }
            }else{
                this.getPhotos();
            }
        } catch (err) {
            console.log(err.toString());
        }
    }

    _getNextPhoto = () => {
        this.getPhotos();
    }

    _saveImg = () => {
        const img = 'http://www.helloui.net/assets/watch.jpg';
        var promise = CameraRoll.saveToCameraRoll(img); // 在 Android 上，img是一个本地 URI，例如"file:///sdcard/img.png"。在 iOS， img可以是任意图片 URI
        promise.then(function(result) {
            alert('保存成功！地址如下：\n' + result);
        }).catch(function(error) {
            alert('保存失败！\n' + error);
        });
    }

    _renderImg = () => {
        const side = 200 ;
        if(this.state.images.length > 0){
            const image = this.state.images[0].node.image;
            return(
                <View>
                    <Image 
                        source={{ uri: image.uri }} 
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
                <Text>照片：</Text>
                {this._renderImg()}
                <Button 
                    title='更换一张照片'
                    onPress={this._getNextPhoto}
                />
                <Button 
                    title='保存一张网络图片'
                    onPress={this._saveImg}
                />
            </View>
        );
    }
}

export default CameraRollAPI;

// Android不需要链接RCTCameraRoll库，可以使用PermissionsAndroid
// iOS需要链接RCTCameraRoll库,详情请参考https://blog.csdn.net/qq_38719039/article/details/79469763

// 保存图片至相册
// CameraRoll.saveToCameraRoll(tag, [type]);
// -在Android，tag是一个本地 URI，例如"file:///sdcard/img.png".
// -在iOS，tag可以是任意图片 URI（本地或是远程 asset-library、base64）.也可以是本地视频文件的 URI（远程和 base64 目前还不支持）。

// 获取相册数据
// CameraRoll.getPhotos(params);