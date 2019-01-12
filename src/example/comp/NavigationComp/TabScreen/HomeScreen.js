import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class HomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.contextTextStyle}>This is a HomeScreen!</Text>
            <TouchableOpacity 
                style={styles.buttonContainer}
                onPress={()=>{navigation.navigate('Settings');}}
            >
                <Text>To SettingsScreen</Text>
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

HomeScreen.propTypes = {
  navigation: PropTypes.object
};

export default HomeScreen;