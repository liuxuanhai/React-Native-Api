import React, { Component } from 'react';
import { View } from 'react-native';
import ClipboardAPI from '../example/api/ClipboardAPI';
import WebViewComp from '../example/comp/WebViewComp';

class MainView extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <ClipboardAPI /> 
            </View>
        );
    }
}

export default MainView;