import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
// window.devicePixelRatio 是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。公式表示就是：
// window.devicePixelRatio = 物理像素 / dips ，即
// 像素尺寸 = 布局尺寸 * PixelRatio.get()
// function getPixelSizeForLayoutSize(layoutSize){
//  return Math.round(layoutSize * PixelRatio.get());
// }
class PixelRatioAPI extends React.Component {

    render(){
        console.log(PixelRatio.getPixelSizeForLayoutSize(3));
        console.log(PixelRatio.get());
        return(
            <View style={styles.containerViewStyle}>
                <View style={styles.dpViewStyle}>
                    <Text>1dp(布局尺寸)边框</Text>
                </View>
                <View style={styles.pxViewStyle}>
                    <Text>1px(像素尺寸)边框</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dpViewStyle: {
        height: 100,
        borderWidth: 1
    },
    pxViewStyle: {
        marginTop: 20,
        height: 100,
        borderWidth: 1/PixelRatio.get()
    }
});

export default PixelRatioAPI;