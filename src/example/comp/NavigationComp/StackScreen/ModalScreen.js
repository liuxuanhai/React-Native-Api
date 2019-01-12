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
                    <Text>Dismiss</Text>
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
        borderRadius: 30,
        borderWidth: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    }
});

ModalScreen.propTypes = {
    navigation: PropTypes.object
};

export default ModalScreen;