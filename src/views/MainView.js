import React, { Component } from 'react';
import { View } from 'react-native';
import SectionListComp from '../example/comp/SectionListComp';

class MainView extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <SectionListComp />
            </View>
        );
    }
}

export default MainView;