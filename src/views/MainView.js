import React, { Component } from 'react';
import { View } from 'react-native';
import ScrollAnimatedComp from '../example/comp/Animated/ScrollAnimatedComp';

class MainView extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <ScrollAnimatedComp />
            </View>
        );
    }
}

export default MainView;