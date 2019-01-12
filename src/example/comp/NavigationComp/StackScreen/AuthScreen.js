import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class AuthScreen extends Component {
    static navigationOptions = {
        title: 'AuthScreen',
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
        navigation.navigate('List', { prevScreenTitle: 'AuthScreen' }); // 要区分与navigation.push方法的效果
    }

    render(){
        return(
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={this._navigate}
            >
                <Text style={styles.textStyle}>进入 ListScreen 页</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#009688',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 30,
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
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