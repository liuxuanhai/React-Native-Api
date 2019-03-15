import React from 'react';
import { View, WebView, Button, Modal, Text } from 'react-native';
// import { WebView } from 'react-native-webview';

// WebViewComp两大用处：
// 通过modal弹出，显示一个网页
// 通过postMessage和onMessage方法和网页进行数据通信(rn可以通过ref引用WebView)
class WebViewComp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    _openModalWin = () => {
        this.setState({modalVisible: true});
    }

    _closeModalWin = () => {
        this.setState({modalVisible: false});
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Button title='打开页面' onPress={this._openModalWin}></Button>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this._closeModalWin(); }}

                >
                    <WebView
                        style={{width:'100%',height:'100%'}}
                        source={{uri: 'https://www.iqiyi.com/'}}
                        automaticallyAdjustContentInsets={true} // 控制插入到导航栏，标签栏或者工具条之后的 web 内容是否自适应。默认为true
                        onLoad={() => {console.log('加载成功');}} // 当 WebView加载成功后执行的函数
                        onLoadEnd={() => {console.log('加载结束');}} // 当加载结束调用，不管是成功还是失败
                        onLoadStart={() => {console.log('开始加载');}} // 当 WebView刚开始加载时调用的函数
                        renderError={() => {console.log('视图渲染发生错误');}} // 返回一个视图用于显示错误
                        startInLoadingState={true}
                        renderLoading={() => {
                            return <View><Text>这是自定义Loading...</Text></View>;
                        }}
                    />
                </Modal>
            </View>
        );
    }
}

export default WebViewComp;
