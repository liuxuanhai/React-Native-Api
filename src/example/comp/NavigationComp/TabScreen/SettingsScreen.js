import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class SettingsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.contextTextStyle}>SettingsScreen!</Text>
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

SettingsScreen.propTypes = {
  navigation: PropTypes.object
};

export default SettingsScreen;