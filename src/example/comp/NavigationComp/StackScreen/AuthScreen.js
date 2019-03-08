import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class AuthScreen extends Component {
    static navigationOptions = {
        headerTitle: 'AuthScreen',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 26
        }
    }

    _navigate = () => {
        const { navigation } = this.props;
        navigation.navigate('List', {prevScreenTitle:'AuthScreen'}); // 要区分与navigation.push方法的效果
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this._navigate}
                >
                    <Text style={styles.textStyle}>进入ListScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        backgroundColor: '#009688',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    textStyle: {
        color: '#FFFFFF',
        fontSize: 18
    }
});

AuthScreen.propTypes = {
    navigation: PropTypes.object
};

export default AuthScreen;