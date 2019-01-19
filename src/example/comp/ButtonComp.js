import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

class ButtonComp extends React.Component{

    _onPress = () => {
        console.log('onPress!');
    }

    render(){
        // Button组件没有style参数，故无法定制样式
        return(
            <View style={styles.viewStyle}>
                <Button
                    onPress={this._onPress}
                    title="Submit"
                    color="#841584"
                />
                <Button
                    onPress={this._onPress}
                    title="Submit Disabled"
                    color="#841584"
                    disabled={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20
    }
});

export default ButtonComp;