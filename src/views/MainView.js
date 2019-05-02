import React, { Component } from 'react';
import { View } from 'react-native';
import FetchAPI from '../example/api/FetchAPI';

class MainView extends Component {
    render(){
        return (
            <View style={{flex:1}}>
                <FetchAPI /> 
            </View>
        );
    }
}

export default MainView;