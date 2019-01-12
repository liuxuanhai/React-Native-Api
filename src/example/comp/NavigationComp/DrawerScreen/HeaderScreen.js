import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class HeaderScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        drawerLabel: () => {
            return(
                <View style={styles.drawerLabelContainer}>
                    <Text style={styles.contextTextStyle}>Hearder</Text>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={()=>navigation.closeDrawer()} 
                    >
                        <Text>Close Drawer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={()=>navigation.navigate('Home')}
                    >
                        <Text>Go to Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={()=>navigation.navigate('Notifications')}
                    >
                        <Text>Go to Notifications</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    });

    render() {        
        const { navigation } = this.props;
        return (
            <View style={styles.viewContainer} >
                <Text style={styles.contextTextStyle}>Drawer HeaderScreen</Text>
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
                    onPress={()=>navigation.navigate('Notifications')}
                >
                    <Text>Go to NotificationsScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24
    },
    drawerLabelContainer:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        height: 200
    },
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
        padding: 5,
        marginTop: 10
    }
});

HeaderScreen.propTypes = {
    navigation: PropTypes.object
};

export default HeaderScreen;