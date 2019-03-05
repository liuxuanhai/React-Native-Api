import React, { Component } from 'react';
import { View } from 'react-native';
import AnimatedComp from '../example/comp/Animated/AnimatedComp';

class MainView extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <AnimatedComp />
            </View>
        );
    }
}

export default MainView;