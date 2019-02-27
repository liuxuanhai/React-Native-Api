import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BoxShadow } from 'react-native-shadow';

// 安装插件
// npm install react-native-shadow
// npm install react-native-svg
// react-native link react-native-svg

// BoxShadow仅是隐藏在盒子下的一个阴影对象，标签中常嵌套一个盒子使用，如View
class ShadowAPI extends React.Component {

    shadowOpt = {
        width: 100,
        height: 100,
        color: '#000000',
        border: 10,
        radius: 5,
        opacity: 0.5,
        x: 1,
        y: 1
    }

    render(){
        return(
            <View style={styles.container}>
                <BoxShadow setting={this.shadowOpt}>
                    <View style={styles.boxView}>
                        <Text style={{color:'#000000'}}>
                            点击
                        </Text>
                    </View>
                </BoxShadow>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    boxView: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
});

export default ShadowAPI;