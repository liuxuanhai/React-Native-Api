import React from 'react';
import { View, Text, TouchableHighlight, Image, Platform, CameraRoll, PermissionsAndroid } from 'react-native';

class CameraRollAPI extends React.Component {

    state = {
        images: []
    }

    UNSAFE_componentWillMount() {
        this.requestReadPermission();
    }

    getPhotos(){
        CameraRoll.getPhotos({ first: 10000, assetType: 'All' }) // All全部|Videos录像|Photos照片（默认）
        .then((result) => {
            this.setState({ images: result.edges });
            console.log(result.edges);
        }).catch((error) => {
            console.log(error);
        });
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
                    console.log('你已获取了读写权限');
                    this.getPhotos();
                } else {
                    console.log('获取读写权限失败');
                }
            }else{
                this.getPhotos();
            }
        } catch (err) {
            console.log(err.toString());
        }
    }

    _renderImg = () => {
        const side = 200 ;
        if(this.state.images.length > 0){
            const image = this.state.images[0].node.image;
            return(
                <TouchableHighlight 
                    onPress={()=>{}} 
                    style={{width:side, height:side}}
                >
                    <View>
                        <Image 
                            source={{ uri: image.uri }} 
                            style={{width:side, height:side}} 
                        />
                    </View>
                </TouchableHighlight>
            );
        }else{
            return null;
        }
    }

    render(){
        return(
            <View>
                <Text>CameraRollAPI</Text>
                {this._renderImg()}
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