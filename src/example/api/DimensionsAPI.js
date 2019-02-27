import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

class DimensionsAPI extends React.Component {

    componentDidMount(){
        console.log(height, width);
        Dimensions.addEventListener('change', this._change);
    }

    componentWillUnmount(){
        Dimensions.removeEventListener('change', this._change);
    }

    _change = (e) => {
        console.log(e.window); // window是指浏览器的宽高；screen表示屏幕的宽高，包括顶部的信息栏
    }

    render(){
        return(
            <View>
                <Text>DimensionsAPI</Text>
            </View>
        );
    }
}

export default DimensionsAPI;