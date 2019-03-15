import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class ActivityIndicatorComp extends React.Component{
    render(){
        return(
            <View style={styles.containerStyle}>
                <View style={styles.layoutStyle} />
                <ActivityIndicator style={styles.indicatorStyle} animating={true} size="large" color="#EE5E7B" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        position:'absolute',
        width: '100%',
        height: '100%'
    },
    layoutStyle: {
        position:'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        opacity: 0.2
    },
    indicatorStyle: {
        position:'absolute',
        left:0,
        right:0, 
        top:0, 
        bottom:0,
        margin:'auto'
    }
});

export default ActivityIndicatorComp;