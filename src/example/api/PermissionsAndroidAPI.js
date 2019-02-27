import React from 'react';
import { View, Platform, Button, PermissionsAndroid } from 'react-native';

// ermissionsAndroid 可以访问Android M(也就是6.0)开始提供的权限模型。
// 有一些权限写在AndroidManifest.xml就可以在安装时自动获得，但有一些“危险”的权限则需要弹出提示框供用户选择。本API即用于后一种情形。
// iOS需要链接RCTCameraRoll库,详情请参考https://blog.csdn.net/qq_38719039/article/details/79469763
class PermissionsAndroidAPI extends React.Component {

    async requestReadPermission() {
        try {
            const os = Platform.OS; // android or ios
            if(os === 'android'){
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        //第一次请求【拒绝】后提示用户你为什么要这个权限
                        title: '权限请求',
                        message: '我需要获取读写权限，没有该权限我无法工作',
                        buttonNeutral: '等会再问我',
                        buttonNegative: '不行',
                        buttonPositive: '好吧',
                    }
                );

                // GRANTED: 'granted'， 表示用户已授权
                // DENIED: 'denied'， 表示用户已拒绝
                // NEVER_ASK_AGAIN: 'never_ask_again'，表示用户已拒绝，且不愿被再次询问。
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

    render(){
        return(
            <View>
                <Button 
                    onPress={this.requestReadPermission}
                    title='请求权限'
                />
            </View>
        );
    }
}

export default PermissionsAndroidAPI;