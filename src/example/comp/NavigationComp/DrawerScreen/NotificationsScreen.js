import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class NotificationsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
        <Image
            source={require('./notifications.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.viewContainer}>
                <Text style={styles.contextTextStyle}>Drawer NotificationsScreen</Text>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>navigation.openDrawer()}
                >
                    <Text>Open Drawer</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>navigation.toggleDrawer()}
                >
                    <Text>Toggle Drawer</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=>{navigation.goBack();}}
                >
                    <Text>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    viewContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    contextTextStyle: {
        fontSize: 24
    },
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderWidth: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 10
    }
});

NotificationsScreen.propTypes = {
    navigation: PropTypes.object
};

export default NotificationsScreen;