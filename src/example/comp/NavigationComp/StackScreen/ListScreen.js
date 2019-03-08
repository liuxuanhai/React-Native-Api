import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class ListScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'ListScreen',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 26
        },
        headerLeft:(
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={()=>{navigation.goBack();}}
            >
                <Text style={styles.headerLeftTextStyle}>返回{navigation.getParam('prevScreenTitle','为空时显示这段文字')}</Text>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity
                style={styles.buttonContainer} 
                onPress={()=>{navigation.navigate('Item', { prevScreenTitle: 'ListScreen' });}}
            >
                <Text style={styles.headerRightTextStyle}>进入ItemScreen</Text>
            </TouchableOpacity>
        )
    })

    render(){
        const { navigation } = this.props;
        console.log(navigation.getParam('defaultParam'));
        return(
            <View style={styles.viewStyle}>
                <Text>This is ListScreen！</Text>
            </View>
        );
    }
}

ListScreen.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    headerLeftTextStyle: {
        color: 'blue'
    },
    headerRightTextStyle: {
        color: 'green'
    }
});

export default ListScreen;