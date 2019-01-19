import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// 圆形的 loading 符号
class ActivityIndicatorComp extends React.Component{

    // animating: true显示|false隐藏
    render(){
        return(
            <View style={styles.viewStyle}>
                <ActivityIndicator size="large" color="#0000ff" />
                <ActivityIndicator size="small" color="#00ff00" />
                <ActivityIndicator size="large" color="#0000ff" animating={false} /> 
                <ActivityIndicator size="large" color="#00ff00" animating={true} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ActivityIndicatorComp;