import React from 'react';
import { View, Button, Linking } from 'react-native';

// 调起其他应用或功能，看官网API
class LinkingAPI extends React.Component {

    _onPress = () => {
        Linking.openURL(`tel:${'10086'}`);
        // Linking.openURL('geo:37.2122 , 12.222');
        // Linking.openURL('http://www.baidu.com');
        // Linking.openURL('mailto:10000@qq. com');
        // Linking.openURL('smsto:10086');
        // Linking.openURL('weixin://');
    } 

    render(){
        return(
            <View>
                <Button 
                    title='Linking'
                    onPress={this._onPress}
                />
            </View>
        );
    }

}

export default LinkingAPI;