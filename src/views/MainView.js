import React, { Component } from 'react';
import { View } from 'react-native';
import WebViewComp from '../example/comp/WebViewComp';

class MainView extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <WebViewComp />
            </View>
        );
    }
}

export default MainView;