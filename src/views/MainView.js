import React, { Component } from 'react';
import { View } from 'react-native';
import StackNavigator from '../example/comp/NavigationComp/StackNavigator';

class MainView extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <StackNavigator /> 
            </View>
        );
    }
}

export default MainView;