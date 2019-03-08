import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class ModalScreen extends Component { 
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.viewContainer}>
                <Text style={styles.contextTextStyle}>This is a ModalScreen!</Text>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>{navigation.goBack();}}
                >
                    <Text>关闭</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    contextTextStyle: {
        fontSize: 30
    },
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    }
});

ModalScreen.propTypes = {
    navigation: PropTypes.object
};

export default ModalScreen;