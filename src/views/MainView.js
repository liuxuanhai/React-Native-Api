import React, { Component } from 'react';
import { View } from 'react-native';
import TextInputComp from '../example/comp/TextInputComp';

class MainView extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <TextInputComp />
            </View>
        );
    }
}

export default MainView;